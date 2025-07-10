import { GoogleGenAI } from '@google/genai'
import { env } from '../../env.ts'

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

