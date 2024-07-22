import React, { useState } from 'react'
import GeneralInfo from './GeneralInfo'
import Education from './Education'
import Experience from './Experience'
import '../styles/CVForm.css'

function CVForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(initialData)

  const handleChange = (section, data) => {
    setFormData(prevData => ({
      ...prevData,
      [section]: data
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="cv-form">
      <GeneralInfo
        data={formData.generalInfo}
        onChange={(data) => handleChange('generalInfo', data)}
      />
      <Education
        data={formData.education}
        onChange={(data) => handleChange('education', data)}
      />
      <Experience
        data={formData.experience}
        onChange={(data) => handleChange('experience', data)}
      />
      <button type="submit" className="submit-btn">Generate CV</button>
    </form>
  )
}

export default CVForm