import React from 'react'
import '../styles/Education.css'

function Education({ data, onChange }) {
  const handleChange = (index, field, value) => {
    const newData = [...data]
    newData[index][field] = value
    onChange(newData)
  }

  const addEducation = () => {
    onChange([...data, { school: '', degree: '', graduationDate: '' }])
  }

  const removeEducation = (index) => {
    const newData = data.filter((_, i) => i !== index)
    onChange(newData)
  }

  return (
    <section className="education">
      <h2>Education</h2>
      {data.map((edu, index) => (
        <div key={index} className="education-item">
          <input
            type="text"
            value={edu.school}
            onChange={(e) => handleChange(index, 'school', e.target.value)}
            placeholder="School Name"
            required
          />
          <input
            type="text"
            value={edu.degree}
            onChange={(e) => handleChange(index, 'degree', e.target.value)}
            placeholder="Degree"
            required
          />
          <input
            type="date"
            value={edu.graduationDate}
            onChange={(e) => handleChange(index, 'graduationDate', e.target.value)}
            required
          />
          <button type="button" onClick={() => removeEducation(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addEducation}>Add Education</button>
    </section>
  )
}

export default Education