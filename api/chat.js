import { GoogleGenAI } from "@google/genai";

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  // Securely access API key on the server side
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: 'Server configuration error: API Key missing' });
  }

  const { message } = request.body;
  
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // System instruction logic moved to server for security
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: `You are VastuBot, an expert AI assistant for VastuCraft AI Studio. 
        Your goal is to provide helpful, preliminary advice on Vastu Shastra and modern construction technology.
        
        Studio Context:
        - We are a hybrid architecture studio led by Ar. Vidhi Gajjar (Architect/Vastu Expert) and Swetang Gajjar (AI Specialist).
        - We combine traditional Vastu with AI-driven construction quality control.
        - We are based in Gujarat (Ahmedabad, Gandhinagar, Surat).
        
        Guidelines:
        - Answer questions about Vastu directions (North, East, etc.) and room placements clearly.
        - If a user asks about construction defects or smart buildings, mention Swetang's AI vision technology.
        - If a user asks about architectural planning or RERA, mention Vidhi's expertise.
        - Always end by suggesting they "Book a Discovery Call" or "Upload their floor plan" for a professional analysis.
        - Keep responses concise (under 150 words) and professional but warm.
        `,
        temperature: 0.7,
      }
    });

    return response.status(200).json({ text: result.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return response.status(500).json({ error: "Failed to process request." });
  }
}