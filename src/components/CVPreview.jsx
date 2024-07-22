import React from 'react'
import '../styles/CVPreview.css'

function CVPreview({ data, onEdit }) {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>
      <section className="preview-section">
        <h3>General Information</h3>
        <p>Name: {data.generalInfo.name}</p>
        <p>Email: {data.generalInfo.email}</p>
        <p>Phone: {data.generalInfo.phone}</p>
      </section>
      <section className="preview-section">
        <h3>Education</h3>
        {data.education.map((edu, index) => (
          <div key={index}>
            <p>School: {edu.school}</p>
            <p>Degree: {edu.degree}</p>
            <p>Graduation Date: {edu.graduationDate}</p>
          </div>
        ))}
      </section>
      <section className="preview-section">
        <h3>Work Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Position: {exp.position}</p>
            <p>Start Date: {exp.startDate}</p>
            <p>End Date: {exp.endDate}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
          </div>
        ))}
      </section>
      <button onClick={onEdit}>Edit CV</button>
    </div>
  )
}

export default CVPreview