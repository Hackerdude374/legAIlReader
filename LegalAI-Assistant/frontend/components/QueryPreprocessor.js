import { useState } from 'react'

export default function QueryPreprocessor() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!query) return

    try {
      const response = await fetch('http://localhost:8000/api/support/preprocess', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: query }),
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error preprocessing query:', error)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Query Preprocessing</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Enter your query here"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Preprocess Query</button>
      </form>
      {result && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Preprocessing Result:</h3>
          <p>Original Query: {result.original_query}</p>
          <p>Embeddings: {result.embeddings.slice(0, 5).map(e => e.toFixed(4)).join(', ')}...</p>
        </div>
      )}
    </div>
  )
}
