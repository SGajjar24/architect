// SECURITY NOTE: 
// This service interacts with the backend proxy at /api/chat.
// The API Key is securely stored on the server side and is NOT exposed to the client.

export const sendVastuQuery = async (query: string): Promise<{ text: string; isError: boolean }> => {
  try {
    // We send the message to our own serverless function which holds the secure API key
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: query }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to fetch response');
    }

    return { 
      text: data.text || "I couldn't generate a response at this moment.", 
      isError: false 
    };
  } catch (error) {
    console.error("Chat Service Error:", error);
    return { 
      text: "I'm sorry, but the AI service is currently unavailable. Please check your connection or try again later.", 
      isError: true 
    };
  }
};