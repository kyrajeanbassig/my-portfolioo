import React, { useState, useEffect } from "react";
import "./Educational.css";
import { supabase } from "../../supabaseClient";
import { FaUserGraduate, FaSchool, FaBirthdayCake, FaTransgender, FaFlag, FaLanguage } from "react-icons/fa";

function Educational() {
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const fetchEducation = async () => {
      const { data } = await supabase.from('education').select('*').order('id', { ascending: true });
      if (data) setEducationList(data);
    };
    fetchEducation();
  }, []);

  const personalData = [
    { icon: <FaBirthdayCake className="info-icon" />, label: "Date of Birth", value: "October 4, 2003" },
    { icon: <FaUserGraduate className="info-icon" />, label: "Age", value: "21" },
    { icon: <FaTransgender className="info-icon" />, label: "Sex", value: "Female" },
    { icon: <FaFlag className="info-icon" />, label: "Citizenship", value: "Filipino" },
    { icon: <FaLanguage className="info-icon" />, label: "Languages", value: "Filipino, English" },
  ];

  return (
    <section className="edu-container">
      <div className="wave-bg"></div>

      <div className="edu-text">
        <h2>Educational Background</h2>
        <p>My academic journey fetched from database.</p>
      </div>

      <div className="edu-cards">
        {educationList.length > 0 ? educationList.map((edu) => (
          <div key={edu.id} className="edu-card glass-purple">
            <FaSchool className="edu-icon" />
            <h3>{edu.school}</h3>
            <p className="level">{edu.degree}</p>
            <p className="details">{edu.year}</p>
            {edu.description && <small>{edu.description}</small>}
          </div>
        )) : (
          <p style={{color:'white'}}>Loading...</p>
        )}
      </div>

      <div className="personal-text">
        <h2>Personal Information</h2>
        <p>Get to know me better.</p>
      </div>

      <div className="personal-cards">
        {personalData.map((info, index) => (
          <div key={index} className="personal-card glass-purple">
            {info.icon}
            <div className="info-content">
              <h4>{info.label}</h4>
              <p>{info.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Educational;