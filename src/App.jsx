import React, { useState } from 'react'
import Header from './components/Header'
import CVForm from './components/CVForm'
import CVPreview from './components/CVPreview'
import './styles/App.css'

function App() {
  const [cvData, setCvData] = useState({
    generalInfo: { name: '', email: '', phone: '' },
    education: [],
    experience: []
  })
  const [isEditing, setIsEditing] = useState(true)

  const handleSubmit = (newData) => {
    setCvData(newData)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  return (
    <div className="App">
      <Header />
      <main>
        {isEditing ? (
          <CVForm onSubmit={handleSubmit} initialData={cvData} />
        ) : (
          <CVPreview data={cvData} onEdit={handleEdit} />
        )}
      </main>
    </div>
  )
}

export default App