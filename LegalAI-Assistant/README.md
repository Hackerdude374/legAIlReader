# LegalAI Assistant

LegalAI Assistant is an AI-powered web application for legal document analysis and customer support query preprocessing. It demonstrates the integration of advanced NLP models with a modern web stack and MLOps practices.

## Features

- Legal document analysis using BERT-based models
- Customer support query preprocessing with sentence transformers
- User-friendly web interface built with Next.js
- Scalable backend API using FastAPI
- Containerized deployment with Docker and Docker Compose
- Continuous Integration and Deployment with GitHub Actions

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: FastAPI (Python)
- AI/ML: PyTorch, Hugging Face Transformers, LangChain
- Database: PostgreSQL
- MLOps: Docker, GitHub Actions
- Other tools: Poetry (Python dependency management)

## Getting Started

1. Clone the repository
2. Navigate to the project root directory
3. Run docker-compose -f infra/docker-compose.yml up --build
4. Access the web application at http://localhost:3000

## Development

- Frontend: cd frontend && npm run dev
- Backend: cd backend && uvicorn app.main:app --reload
- ML: cd ml && python main.py

## Testing

Run pytest in the backend and ml directories.

## Deployment

Push to the main branch to trigger the CI/CD pipeline.

## License

This project is licensed under the MIT License.
