import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4';
// import { db } from '../../db/connection.ts';
// import { schema } from '../../db/schema/index.ts';
import { transcribeAudio } from '../../services/gemini.ts';



export const uploadAudioRecord: FastifyPluginCallbackZod = (app) => {
    app.post('/rooms/:roomId/audio', {
        schema: {
            params: z.object({
                roomId: z.string()
            }),

        }
    }, async (request) => {

        // const { roomId } = request.params;

        const audio = await request.file()

        if (!audio) {
            throw new Error('No audio file provided');
        }

        const audioBuff = await audio.toBuffer()
        const audioB64 = audioBuff.toString('base64')

        const transcription = await transcribeAudio(audioB64, audio.mimetype)

        return { transcription }
    })
}
