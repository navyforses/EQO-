
import { GoogleGenAI } from "@google/genai";
import type { ChatMessage, HistoricalFigure, Language, LocalizedContent } from '../types';

if (!process.env.API_KEY) {
    console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateChatResponse = async (
    figure: HistoricalFigure,
    language: Language,
    history: ChatMessage[],
    newUserMessage: string
): Promise<string> => {
    
    const figureInfo = figure[language];

    const systemInstruction = `You are ${figureInfo.name}, a famous historical figure from Georgia, known as "${figureInfo.title}". 
    Your historical period is the ${figureInfo.era}. 
    Your core identity and knowledge are based on your biography: "${figureInfo.bio}".
    Respond to all questions strictly from the perspective of ${figureInfo.name}. 
    Maintain your persona, using your known personality, knowledge, and historical context. 
    The user is asking you questions in ${language === 'ge' ? 'Georgian' : 'English'}. Respond fluently and naturally in ${language === 'ge' ? 'Georgian' : 'English'}.
    Do not break character. Do not mention that you are an AI model. You are the echo of history.`;

    const model = 'gemini-2.5-flash';
    
    // Convert our ChatMessage array to the format Gemini expects
    const contents = history.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));
    
    // Add the new user message
    contents.push({
        role: 'user',
        parts: [{ text: newUserMessage }]
    });

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: contents,
            config: {
                systemInstruction: systemInstruction,
            }
        });
        
        return response.text;

    } catch (error) {
        console.error("Error generating content from Gemini API:", error);
        throw new Error("Failed to get response from AI. Please check the console for details.");
    }
};
