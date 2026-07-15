documents = {}

def save_document(filename: str, text: str):
    print(f"Saving: {filename}")
    documents[filename] = text
    print(documents.keys())

def get_document(filename: str):
    print(f"Looking for: {filename}")
    print(documents.keys())
    return documents.get(filename)