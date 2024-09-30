import { useState } from 'react'

export default function DocumentAnalyzer() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('http://localhost:8000/api/document/analyze', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error analyzing document:', error)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Document Analysis</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} className="mb-4" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Analyze Document</button>
      </form>
      {result && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Analysis Result:</h3>
          <p>Class: {result.class}</p>
          <p>Confidence: {result.confidence.toFixed(4)}</p>
        </div>
      )}
    </div>
  )
}
