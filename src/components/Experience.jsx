import React from 'react'
import '../styles/Experience.css'

function Experience({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data]
    newData[index][field] = value
    onChange(newData)
  }

  const addExperience = () => {
    onChange([...data, { company: '', position: '', startDate: '', endDate: '', responsibilities: '' }])
  }

  const removeExperience = (index) => {
    const newData = data.filter((_, i) => i !== index)
    onChange(newData)
  }

  return (
    <section className="experience">
      <h2>Work Experience</h2>
      {data.map((exp, index) => (
        <div key={index} className="experience-item">
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleChange(index, 'company', e.target.value)}
            placeholder="Company Name"
            required
          />
          <input
            type="text"
            value={exp.position}
            onChange={(e) => handleChange(index, 'position', e.target.value)}
            placeholder="Position"
            required
          />
          <input
            type="date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, 'startDate', e.target.value)}
            required
          />
          <input
            type="date"
            value={exp.endDate}
            onChange={(e) => handleChange(index, 'endDate', e.target.value)}
            required
          />
          <textarea
            value={exp.responsibilities}
            onChange={(e) => handleChange(index, 'responsibilities', e.target.value)}
            placeholder="Main Responsibilities"
            required
          />
          <button type="button" onClick={() => removeExperience(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addExperience}>Add Experience</button>
    </section>
  )
}

export default Experience