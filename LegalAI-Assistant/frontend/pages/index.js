import Head from 'next/head'
import { useState } from 'react'
import DocumentAnalyzer from '../components/DocumentAnalyzer'
import QueryPreprocessor from '../components/QueryPreprocessor'

export default function Home() {
  const [activeTab, setActiveTab] = useState('document')

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>LegalAI Assistant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">LegalAI Assistant</h1>
        
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 mr-4 ${activeTab === 'document' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('document')}
          >
            Document Analysis
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'query' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveTab('query')}
          >
            Query Preprocessing
          </button>
        </div>

        {activeTab === 'document' ? <DocumentAnalyzer /> : <QueryPreprocessor />}
      </main>
    </div>
  )
}
