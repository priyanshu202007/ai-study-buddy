from mem0 import MemoryClient
from dotenv import load_dotenv
import os

load_dotenv()

client = MemoryClient(
    api_key=os.getenv("MEM0_API_KEY")
)


def get_memory(user_id: str, query: str):
    """
    Retrieve relevant memories for the user.
    """
    try:
        result = client.search(
            query,
            filters={"user_id": user_id}
        )

        print("MEM0 RESULT:")
        print(result)

        return result

    except Exception as e:
        print(f"Mem0 Search Error: {e}")
        return None


def save_memory(user_id: str, user_message: str, assistant_message: str):
    """
    Save the latest conversation.
    """
    try:
        messages = [
            {
                "role": "user",
                "content": user_message
            },
            {
                "role": "assistant",
                "content": assistant_message
            }
        ]

        client.add(
            messages,
            user_id=user_id
        )

    except Exception as e:
        print(f"Mem0 Save Error: {e}")