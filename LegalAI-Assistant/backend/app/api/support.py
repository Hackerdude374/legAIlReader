from fastapi import APIRouter
from pydantic import BaseModel
from ..services.query_preprocessor import preprocess_query

router = APIRouter()

class Query(BaseModel):
    text: str

@router.post("/preprocess")
async def preprocess_support_query(query: Query):
    result = preprocess_query(query.text)
    return result
