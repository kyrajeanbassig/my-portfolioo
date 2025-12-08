import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const MasterDashboard = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); 
  
  const [activeTab, setActiveTab] = useState('about'); 
  const [loading, setLoading] = useState(true);


  const [about, setAbout] = useState({
    greeting: '', title: '', description: '', image_url: ''
  });
  const [contact, setContact] = useState({
    email: '', phone: '', location: ''
  });
  
  const [skills, setSkills] = useState([]);
  const [skillsDesc, setSkillsDesc] = useState(""); 
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: '', icon_name: 'FaCode' });
  const [newEdu, setNewEdu] = useState({ school: '', degree: '', year: '', description: '' });
  const [editingEduId, setEditingEduId] = useState(null); 
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
  }, [navigate]);

  const fetchAllData = async () => {

    const { data: abt } = await supabase.from('about').select('*').maybeSingle();
    if (abt) {
      setAbout({
        id: abt.id,
        greeting: abt.greeting,
        title: abt.title,
        description: abt.description,
        image_url: abt.image_url
      });
    }

  
    const { data: cnt } = await supabase.from('contact_info').select('*').maybeSingle();
    if (cnt) setContact(cnt);


    const { data: skl } = await supabase.from('skills').select('*').order('id');
    setSkills(skl || []);

    const { data: desc } = await supabase
      .from('site_content')
      .select('content_text')
      .eq('section_key', 'skills_desc')
      .maybeSingle();
    if (desc) setSkillsDesc(desc.content_text);

    const { data: prj } = await supabase.from('projects').select('*').order('id', { ascending: false });
    setProjects(prj || []);

    const { data: edu } = await supabase.from('education').select('*').order('id');
    setEducation(edu || []);
  };



  const handleSaveAbout = async () => {
    try {
      setLoading(true);
      const payload = {
        greeting: about.greeting,
        title: about.title,
        description: about.description,
        image_url: about.image_url
      };

      if (about.id) {
        await supabase.from('about').update(payload).eq('id', about.id);
        alert('About Section Updated!');
      } else {
        await supabase.from('about').insert([payload]);
        alert('About Section Created!');
      }
      fetchAllData();
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveContact = async () => {
    try {
      setLoading(true);
      const payload = {
        email: contact.email,
        phone: contact.phone,
        location: contact.location
      };

      if (contact.id) {
        await supabase.from('contact_info').update(payload).eq('id', contact.id);
        alert('Contact Info Updated!');
      } else {
        await supabase.from('contact_info').insert([payload]);
        alert('Contact Info Created!');
      }
      fetchAllData();
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSkillsDesc = async () => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('site_content')
        .upsert({ 
          section_key: 'skills_desc', 
          content_text: skillsDesc 
        }, { onConflict: 'section_key' });

      if (error) throw error;
      alert('Skills Description Updated!');
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
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



  const handleSaveEdu = async () => {
    try {
      setLoading(true);
      
      if (editingEduId) {
 
        await supabase.from('education').update(newEdu).eq('id', editingEduId);
        alert("Education Updated!");
      } else {

        await supabase.from('education').insert(newEdu);
        alert("Education Added!");
      }


      setNewEdu({ school: '', degree: '', year: '', description: '' });
      setEditingEduId(null);
      fetchAllData();

    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditEduClick = (eduItem) => {
    setEditingEduId(eduItem.id);
    setNewEdu({
      school: eduItem.school,
      degree: eduItem.degree,
      year: eduItem.year,
      description: eduItem.description || '' 
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const handleCancelEduEdit = () => {
    setEditingEduId(null);
    setNewEdu({ school: '', degree: '', year: '', description: '' });
  };


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
          
 
          {activeTab === 'about' && (
            <div className="form-section">
              <h3>Edit About Section</h3>
              <div className="form-group">
                <label className="form-label">Greeting</label>
                <input value={about.greeting || ''} onChange={e => setAbout({...about, greeting: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Main Title</label>
                <input value={about.title || ''} onChange={e => setAbout({...about, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea value={about.description || ''} onChange={e => setAbout({...about, description: e.target.value})} />
              </div>
              <div className="form-group">
                <label className="form-label">Image URL</label>
                <input value={about.image_url || ''} onChange={e => setAbout({...about, image_url: e.target.value})} />
              </div>

              <button onClick={handleSaveAbout} className="btn-save">Save About</button>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="form-section">
              <h3>Edit Contact Info</h3>
              <div className="form-group"><label className="form-label">Email Address</label><input value={contact.email || ''} onChange={e => setContact({...contact, email: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Phone Number</label><input value={contact.phone || ''} onChange={e => setContact({...contact, phone: e.target.value})} /></div>
              <div className="form-group"><label className="form-label">Location</label><input value={contact.location || ''} onChange={e => setContact({...contact, location: e.target.value})} /></div>
              
              <button onClick={handleSaveContact} className="btn-save">Save Contact</button>
            </div>
          )}


          {activeTab === 'skills' && (
            <div className="form-section">
              <h3>Manage Skills & Content</h3>
              
              <div className="add-box" style={{marginBottom: '20px', background: '#2a1a2a', border: '1px solid #444'}}>
                <h4>Edit Skills Description</h4>
                <div className="form-group">
                   <label className="form-label" style={{fontSize: '0.85rem'}}>Description Text shown on website</label>
                   <textarea 
                      rows="3"
                      placeholder="Enter the description text here..." 
                      value={skillsDesc} 
                      onChange={(e) => setSkillsDesc(e.target.value)} 
                   />
                </div>
                <button 
                  className="btn-save" 
                  style={{marginTop: 10}} 
                  onClick={handleSaveSkillsDesc} 
                >
                  Save Description
                </button>
              </div>

              <div className="add-box">
                <h4>+ Add New Skill Icon</h4>
                <div className="form-group"><input placeholder="Skill Name (e.g. React)" value={newSkill.name} onChange={e => setNewSkill({...newSkill, name: e.target.value})} /></div>
                <div className="form-group"><input placeholder="Level (e.g. Advanced)" value={newSkill.level} onChange={e => setNewSkill({...newSkill, level: e.target.value})} /></div>
                <div className="form-group">
                  <input placeholder="Icon Name (e.g. FaReact, FaJs)" value={newSkill.icon_name} onChange={e => setNewSkill({...newSkill, icon_name: e.target.value})} />
                  <small style={{color:'#888'}}>Find names at: <a href="https://react-icons.github.io/react-icons/icons/fa/" target="_blank" rel="noreferrer" style={{color:'#f4b256'}}>React Icons FA</a></small>
                </div>
                <button className="btn-save" style={{marginTop: 10}} onClick={handleAddSkill}>Add Skill</button>
              </div>

              <ul className="admin-list">
                {skills.map(s => (
                  <li key={s.id}>
                    <span style={{display:'flex', alignItems:'center', gap:'10px'}}>
                      <strong>{s.name}</strong> 
                      <span style={{fontSize:'0.8rem', color:'#aaa'}}>({s.icon_name})</span>
                    </span>
                    <button className="delete-btn" onClick={() => handleDelete('skills', s.id)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          )}

  
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

     
          {activeTab === 'education' && (
            <div className="form-section">
               <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                 <h3>{editingEduId ? 'Edit Education' : 'Manage Education'}</h3>
                 {editingEduId && <button onClick={handleCancelEduEdit} className="delete-btn">Cancel Edit</button>}
               </div>

               <div className="add-box">
                <h4>{editingEduId ? 'Updating Education' : '+ Add New Education'}</h4>
                <div className="form-group"><label className="form-label">School Name</label><input placeholder="e.g. La Consolacion University" value={newEdu.school} onChange={e => setNewEdu({...newEdu, school: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Degree / Course</label><input placeholder="e.g. BSIT" value={newEdu.degree} onChange={e => setNewEdu({...newEdu, degree: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Year</label><input placeholder="e.g. 2021 - Present" value={newEdu.year} onChange={e => setNewEdu({...newEdu, year: e.target.value})} /></div>
                <div className="form-group"><label className="form-label">Awards / Details</label><input placeholder="e.g. With Honors" value={newEdu.description} onChange={e => setNewEdu({...newEdu, description: e.target.value})} /></div>
                

                <button className="btn-save" style={{marginTop: 0}} onClick={handleSaveEdu}>
                  {editingEduId ? 'Update Education' : 'Add Education'}
                </button>
              </div>

              <ul className="admin-list">
                {education.map(e => (
                  <li key={e.id} style={{display:'block'}}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                      <div>
                        <strong>{e.school}</strong>
                        <div style={{fontSize:'0.9rem', color:'#aaa', marginTop:'5px'}}>{e.degree} | {e.year}</div>
                        {e.description && <div style={{fontSize:'0.85rem', color:'#f4b256', marginTop:'2px'}}>★ {e.description}</div>}
                      </div>
                      
     
                      <div style={{display:'flex', gap:'10px'}}>
                        <button className="edit-btn" onClick={() => handleEditEduClick(e)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDelete('education', e.id)}>Delete</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default MasterDashboard;