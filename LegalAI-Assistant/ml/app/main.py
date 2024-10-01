from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
print("ML service is running")
# Load pre-trained model and tokenizer
model_name = "nlpaueb/legal-bert-base-uncased"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

def analyze_document(text: str) -> dict:
    # Tokenize and prepare input
    inputs = tokenizer(text, return_tensors="pt", truncation=True, max_length=512)
    
    # Perform inference
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Process output
    probabilities = torch.nn.functional.softmax(outputs.logits, dim=-1)
    predicted_class = torch.argmax(probabilities, dim=-1).item()
    confidence = probabilities[0][predicted_class].item()
    
    return {
        "class": predicted_class,
        "confidence": confidence
    }

if __name__ == "__main__":
    # This is just a test to make sure the model loads and works
    test_text = "This is a legal document regarding contract law."
    result = analyze_document(test_text)
    print(f"Test result: {result}")