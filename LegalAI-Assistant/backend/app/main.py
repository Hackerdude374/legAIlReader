from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to LegalAI Assistant API"}

# Import and include routers
from .api import document, support

app.include_router(document.router, prefix="/api/document", tags=["document"])
app.include_router(support.router, prefix="/api/support", tags=["support"])
