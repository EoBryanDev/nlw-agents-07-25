import { GoogleGenAI } from '@google/genai'
import { env } from '../../env.ts'
import { th } from 'zod/v4/locales'

const gemini = new GoogleGenAI({
    apiKey: env.GOOGLE_GENAI_API_KEY,
})

const model = 'gemini-2.5-flash'


export async function transcribeAudio(audioAsB64: string, mimeType: string) {
    const response = await gemini.models.generateContent({
        model,
        contents: [
            {
                text: 'Transcript audio to Brazilian Portuguese. Be natual and precise. Maintain the right ponctuation and grammar. Break the text in paragraphs when needed.'
            },
            {
                inlineData: {
                    mimeType,
                    data: audioAsB64,
                }
            }
        ]
    })

    if (!response.text) {
        throw new Error('No data returned from Gemini API')
    }

    return response.text
}

const modelEmbed = 'text-embedding-004'

export async function generateEmbeddings(text: string) {
    const response = await gemini.models.embedContent({
        model: modelEmbed,
        contents: [{ text }],
        config: {
            taskType: 'RETRIEVAL_DOCUMENT'
        }
    })

    if (!response.embeddings?.[0].values) {
        throw new Error('No embeddings returned from Gemini API')
    }

    return response.embeddings[0].values
}

export async function generateAnswer(question: string, transcriptions: string[]) {
    const context = transcriptions.join('\n\n');

    const prompt = "Answer the question based on the context provided. Be concise and to the point. If you cannot answer, say I don't know.Answer in PT-br".trim();

    const instruction = `
    - Use only information from the context
    - If the answer is not in the context provided, say that you don't have enough information to answer
    - Be concise and objective
    - Maintain a educational tone
    - Cite relevant text if appropriate
    `
    const response = await gemini.models.generateContent({
        model,
        contents: [
            {
                text: prompt
            },
            {
                text: `Context:\n${context}`
            },
            {
                text: `Question:\n${question}`
            },
            {
                text: `Instructions:\n${instruction}`
            }
        ]
    })

    if (!response.text) {
        throw new Error('No answer returned from Gemini API')
    }

    return response.text;
}
