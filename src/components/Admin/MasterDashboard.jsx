import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const MasterDashboard = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 
  const [activeTab, setActiveTab] = useState('projects');
  const [loading, setLoading] = useState(true);

  // --- DATA STATE ---
  const [profile, setProfile] = useState({});
  const [about, setAbout] = useState({});
  const [contact, setContact] = useState({});
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);

  // --- FORM STATE ---
  const [newSkill, setNewSkill] = useState({ name: '', level: '', icon_name: 'FaCode' });
  const [newEdu, setNewEdu] = useState({ school: '', degree: '', year: '', description: '' });

  // PROJECT STATE
  const [projectForm, setProjectForm] = useState({ title: '', description: '', image_url: '' });
  const [imageFile, setImageFile] = useState(null); 
  const [isEditing, setIsEditing] = useState(null); 

  useEffect(() => {
    const init = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return navigate('/admin');
      await fetchAllData();
      setLoading(false);
    };
    init();
  }, []);

  const fetchAllData = async () => {
    const { data: prof } = await supabase.from('profile').select('*').single();
    if(prof) setProfile(prof);
    const { data: abt } = await supabase.from('about').select('*').single();
    if(abt) setAbout(abt);
    const { data: cnt } = await supabase.from('contact_info').select('*').single();
    if(cnt) setContact(cnt);

    const { data: skl } = await supabase.from('skills').select('*').order('id');
    setSkills(skl || []);
    const { data: prj } = await supabase.from('projects').select('*').order('id', { ascending: false });
    setProjects(prj || []);
    const { data: edu } = await supabase.from('education').select('*').order('id');
    setEducation(edu || []);
  };

  // --- GENERIC UPDATERS ---
  const handleUpdateSingle = async (table, data) => {
    if (data.id) {
      await supabase.from(table).update(data).eq('id', data.id);
      alert('Updated Successfully!');
    }
  };

  const handleDelete = async (table, id) => {
    if(!window.confirm("Are you sure you want to delete this?")) return;
    await supabase.from(table).delete().eq('id', id);
    fetchAllData();
  };

  const handleAddSkill = async () => {
    await supabase.from('skills').insert(newSkill);
    fetchAllData();
    setNewSkill({ name: '', level: '', icon_name: 'FaCode' });
  };

  const handleAddEdu = async () => {
    await supabase.from('education').insert(newEdu);
    fetchAllData();
    setNewEdu({ school: '', degree: '', year: '', description: '' });
  };

  // --- IMAGE UPLOAD LOGIC ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImageFile(file);
  };

  const uploadImage = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${fileName}`;
    const { error: uploadError } = await supabase.storage.from('project-images').upload(filePath, file);
    if (uploadError) return null;
    const { data } = supabase.storage.from('project-images').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const handleSaveProject = async () => {
    try {
      setLoading(true);
      let finalImageUrl = projectForm.image_url;
      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) finalImageUrl = uploadedUrl;
      }
      const projectData = { title: projectForm.title, description: projectForm.description, image_url: finalImageUrl };

      if (isEditing) {
        await supabase.from('projects').update(projectData).eq('id', isEditing);
        alert("Project Updated!");
      } else {
        await supabase.from('projects').insert([projectData]);
        alert("Project Added!");
      }
      setProjectForm({ title: '', description: '', image_url: '' });
      setImageFile(null);
      setIsEditing(null);
      if(fileInputRef.current) fileInputRef.current.value = "";
      fetchAllData();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (project) => {
    setIsEditing(project.id);
    setProjectForm({ title: project.title, description: project.description, image_url: project.image_url });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setIsEditing(null);
    setProjectForm({ title: '', description: '', image_url: '' });
    setImageFile(null);
    if(fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const renderNavItem = (id, label) => (
    <button className={`nav-item ${activeTab === id ? 'active' : ''}`} onClick={() => setActiveTab(id)}>
      {label}
    </button>
  );

  if (loading) return <div className="admin-container"><div style={{margin:'auto'}}>Loading...</div></div>;

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div className="admin-logo">Admin Panel</div>
        <nav className="sidebar-nav">
          {renderNavItem('profile', 'Profile')}
          {renderNavItem('about', 'About')}
          {renderNavItem('skills', 'Skills')}
          {renderNavItem('projects', 'Projects')}
          {renderNavItem('education', 'Education')}
          {renderNavItem('contact', 'Contact')}
        </nav>
        <button onClick={handleLogout} className="btn-logout">Logout</button>
      </aside>

      <main className="admin-main">
        <div className="dashboard-header">
          <h2>Manage {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
        </div>

        <div className="content-card">
          
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div className="form-section">
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <h3>{isEditing ? 'Edit Project' : 'Add New Project'}</h3>
                {isEditing && <button onClick={handleCancelEdit} className="delete-btn">Cancel Edit</button>}
              </div>
              <div className="add-box">
                <input placeholder="Project Title" value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} />
                <textarea placeholder="Description" value={projectForm.description} onChange={e => setProjectForm({...projectForm, description: e.target.value})} />
                <div style={{marginTop:'10px'}}>
                   <label className="form-label">Project Image</label>
                   <input type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} style={{padding:'10px', background:'#222'}} />
                   {projectForm.image_url && !imageFile && <div style={{marginTop:'5px', fontSize:'0.8rem', color:'#aaa'}}>Current Image: <a href={projectForm.image_url} target="_blank" rel="noreferrer" style={{color:'#f4b256'}}>View</a></div>}
                </div>
                <button className="btn-save" style={{marginTop: '20px'}} onClick={handleSaveProject}>{isEditing ? 'Update Project' : 'Add Project'}</button>
              </div>
              <div className="projects-grid-admin">
                {projects.map(p => (
                  <div key={p.id} className="project-card-admin">
                    <div className="project-img-wrapper"><img src={p.image_url || 'https://via.placeholder.com/150'} alt={p.title} /></div>
                    <div className="project-info">
                      <h4>{p.title}</h4>
                      <div className="project-actions">
                        <button className="edit-btn" onClick={() => handleEditClick(p)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete('projects', p.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION TAB */}
          {activeTab === 'education' && (
            <div className="form-section">
               <h3>Manage Education</h3>
               <div className="add-box">
                <h4>+ Add New Education</h4>
                <div className="form-group"><label className="form-label">School Name</label><input placeholder="e.g. La Consolacion University" value={newEdu.school} onChange={e => setNewEdu({...newEdu, school: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Degree / Course</label><input placeholder="e.g. BSIT" value={newEdu.degree} onChange={e => setNewEdu({...newEdu, degree: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Year</label><input placeholder="e.g. 2021 - Present" value={newEdu.year} onChange={e => setNewEdu({...newEdu, year: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Awards / Details</label><input placeholder="e.g. With Honors • Running for Cum Laude" value={newEdu.description} onChange={e => setNewEdu({...newEdu, description: e.target.value})} /></div>
                <button className="btn-save" style={{marginTop: 0}} onClick={handleAddEdu}>Add Education</button>
              </div>
              <ul className="admin-list">
                {education.map(e => (
                  <li key={e.id} style={{display:'block'}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <span><strong>{e.school}</strong></span>
                      <button className="delete-btn" onClick={() => handleDelete('education', e.id)}>Delete</button>
                    </div>
                    <div style={{fontSize:'0.9rem', color:'#aaa', marginTop:'5px'}}>{e.degree} | {e.year}</div>
                    {e.description && <div style={{fontSize:'0.85rem', color:'#f4b256', marginTop:'2px'}}>★ {e.description}</div>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* PROFILE TAB */}
          {activeTab === 'profile' && (
            <div className="form-section">
              <h3>Edit Profile Header</h3>
              <div className="form-group"><label className="form-label">Full Name</label><input value={profile.full_name || ''} onChange={e => setProfile({...profile, full_name: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Role / Tagline</label><input value={profile.role || ''} onChange={e => setProfile({...profile, role: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Short Bio</label><textarea value={profile.bio || ''} onChange={e => setProfile({...profile, bio: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">GitHub URL</label><input value={profile.github_link || ''} onChange={e => setProfile({...profile, github_link: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">LinkedIn URL</label><input value={profile.linkedin_link || ''} onChange={e => setProfile({...profile, linkedin_link: e.target.value})} /></div>
              <button onClick={() => handleUpdateSingle('profile', profile)} className="btn-save">Save Profile</button>
            </div>
          )}

          {/* --- ABOUT TAB (FIXED WITH CARDS) --- */}
          {activeTab === 'about' && (
            <div className="form-section">
              <h3>Edit About Section</h3>
              <div className="form-group"><label className="form-label">Greeting</label><input value={about.greeting || ''} onChange={e => setAbout({...about, greeting: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Main Title</label><input value={about.title || ''} onChange={e => setAbout({...about, title: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Description</label><textarea value={about.description || ''} onChange={e => setAbout({...about, description: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Image URL</label><input value={about.image_url || ''} onChange={e => setAbout({...about, image_url: e.target.value})} /></div>

              {/* --- NEW: EDIT THE 4 CARDS --- */}
              <h4 style={{color: '#f4b256', marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #444', paddingBottom: '5px'}}>Edit Stat Cards</h4>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div className="form-group">
                  <label className="form-label">Experience (Pink Star)</label>
                  <input placeholder="e.g. Fresh Graduate" value={about.card_experience || ''} onChange={e => setAbout({...about, card_experience: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Education (Hat)</label>
                  <input placeholder="e.g. BSIT Student" value={about.card_education || ''} onChange={e => setAbout({...about, card_education: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Achievements (Trophy)</label>
                  <input placeholder="e.g. Dean's Lister" value={about.card_achievements || ''} onChange={e => setAbout({...about, card_achievements: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">Skills (Code)</label>
                  <input placeholder="e.g. Web Development" value={about.card_skills || ''} onChange={e => setAbout({...about, card_skills: e.target.value})} />
                </div>
              </div>

              <button onClick={() => handleUpdateSingle('about', about)} className="btn-save">Save About</button>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="form-section">
              <h3>Manage Skills</h3>
              <div className="add-box">
                <h4>+ Add New Skill</h4>
                <div className="form-group"><input placeholder="Skill Name" value={newSkill.name} onChange={e => setNewSkill({...newSkill, name: e.target.value})} /></div>
                <div className="form-group"><input placeholder="Level" value={newSkill.level} onChange={e => setNewSkill({...newSkill, level: e.target.value})} /></div>
                <div className="form-group"><input placeholder="Icon Name" value={newSkill.icon_name} onChange={e => setNewSkill({...newSkill, icon_name: e.target.value})} /></div>
                <button className="btn-save" style={{marginTop: 0}} onClick={handleAddSkill}>Add Skill</button>
              </div>
              <ul className="admin-list">
                {skills.map(s => (
                  <li key={s.id}>
                    <span><strong>{s.name}</strong> - {s.level}</span>
                    <button className="delete-btn" onClick={() => handleDelete('skills', s.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="form-section">
              <h3>Edit Contact Info</h3>
              <div className="form-group"><label className="form-label">Email Address</label><input value={contact.email || ''} onChange={e => setContact({...contact, email: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Phone Number</label><input value={contact.phone || ''} onChange={e => setContact({...contact, phone: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Location</label><input value={contact.location || ''} onChange={e => setContact({...contact, location: e.target.value})} /></div>
              <button onClick={() => handleUpdateSingle('contact_info', contact)} className="btn-save">Save Contact</button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MasterDashboard;