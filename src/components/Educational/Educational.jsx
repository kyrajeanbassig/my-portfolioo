import React from "react";
import {
  FaUserGraduate,
  FaSchool,
  FaBirthdayCake,
  FaTransgender,
  FaFlag,
  FaLanguage,
} from "react-icons/fa";
import "./Educational.css";

function Educational() {
  const educationData = [
    {
      icon: <FaUserGraduate className="edu-icon" />,
      school: "La Consolacion University Philippines",
      level: "BSIT (2021 – Present)",
      details: "With Honors • Running for Cum Laude",
    },
    {
      icon: <FaSchool className="edu-icon" />,
      school: "St. Mary Academy of Hagonoy",
      level: "Senior High – STEM Strand (2019 – 2021)",
      details: "With Honors",
    },
    {
      icon: <FaSchool className="edu-icon" />,
      school: "Ramona S. Trillana High School",
      level: "High School (2015 – 2019)",
      details: "With Honors",
    },
    {
      icon: <FaSchool className="edu-icon" />,
      school: "Mercado Elementary School",
      level: "Elementary (2009 – 2015)",
      details: "With Honors",
    },
  ];

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

      {/* Education Section */}
      <div className="edu-text">
        <h2>Educational Background</h2>
        <p>My academic journey reflects growth, achievement, and a commitment to excellence.</p>
      </div>

      <div className="edu-cards">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-card glass-purple">
            {edu.icon}
            <h3>{edu.school}</h3>
            <p className="level">{edu.level}</p>
            <p className="details">{edu.details}</p>
          </div>
        ))}
      </div>

      {/* Personal Info Section */}
      <div className="personal-text">
        <h2>Personal Information</h2>
        <p>Get to know me better through a few key details.</p>
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
