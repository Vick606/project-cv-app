import React from 'react'
import '../styles/GeneralInfo.css'

function GeneralInfo({ data, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ ...data, [name]: value })
  }

  return (
    <section className="general-info">
      <h2>General Information</h2>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={data.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
    </section>
  )
}

export default GeneralInfo