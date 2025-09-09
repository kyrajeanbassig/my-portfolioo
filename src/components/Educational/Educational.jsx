import React from "react";
import "./Educational.css";

function Educational() {
  const educationData = [
    {
      school: "La Consolacion University Philippines",
      level: "BSIT (2021 – Present)",
      details: "With Honors • Running for Cum Laude",
    },
    {
      school: "St. Mary Academy of Hagonoy",
      level: "Senior High – STEM Strand (2019 – 2021)",
      details: "With Honors",
    },
    {
      school: "Ramona S. Trillana High School",
      level: "High School (2015 – 2019)",
      details: "With Honors",
    },
    {
      school: "Mercado Elementary School",
      level: "Elementary (2009 – 2015)",
      details: "With Honors",
    },
  ];

  const personalData = [
    { label: "Date of Birth", value: "October 4, 2003" },
    { label: "Age", value: "21" },
    { label: "Sex", value: "Female" },
    { label: "Citizenship", value: "Filipino" },
    { label: "Languages", value: "Filipino, English" },
  ];

  return (
    <section id="educational" className="edu-section">
      <div className="edu-header">
        <h1 className="edu-heading">
          My <span className="highlight">Education</span> and{" "}
          <span className="highlight">Personal</span> Information
        </h1>
      </div>

      <div className="edu-wrapper">
        <div className="edu-column">
          <h2 className="section-title">🎓 Educational Background</h2>
          <div className="edu-timeline">
            {educationData.map((edu, index) => (
              <div className="edu-item" key={index}>
                <span className="dot"></span>
                <div className="edu-content">
                  <h3>{edu.school}</h3>
                  <p className="edu-subtitle">{edu.level}</p>
                  <p className="edu-details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="personal-column">
          <h2 className="section-title">📌 Personal Information</h2>
          <div className="edu-timeline">
            {personalData.map((info, index) => (
              <div className="edu-item" key={index}>
                <span className="dot"></span>
                <div className="edu-content">
                  <h3>{info.label}</h3>
                  <p className="edu-details">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Educational;
