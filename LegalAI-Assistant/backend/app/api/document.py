from fastapi import APIRouter, UploadFile, File
from ..services.document_analyzer import analyze_document

router = APIRouter()

@router.post("/analyze")
async def analyze_legal_document(file: UploadFile = File(...)):
    content = await file.read()
    result = analyze_document(content)
    return result
