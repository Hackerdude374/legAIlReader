from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

model_name = "nlpaueb/legal-bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

def analyze_document(content: bytes) -> dict:
    text = content.decode("utf-8")
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
    
    with torch.no_grad():
        outputs = model(**inputs)
    
    probabilities = torch.nn.functional.softmax(outputs.logits, dim=-1)
    predicted_class = torch.argmax(probabilities, dim=-1).item()
    
    return {
        "class": predicted_class,
        "confidence": probabilities[0][predicted_class].item()
    }
