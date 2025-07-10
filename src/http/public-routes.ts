import { createQuestionRoute } from "./routes/create-questions.ts";
import { createRoomsRoute } from "./routes/create-room.ts";
import { getRoomsQuestionsRoute } from "./routes/get-room-questions.ts";
import { getRoomsRoute } from "./routes/get-rooms.ts";
import { uploadAudioRecord } from "./routes/upload-audio.ts";


export const public_routes = {
    createRoomsRoute,
    createQuestionRoute,
    uploadAudioRecord,
    getRoomsRoute,
    getRoomsQuestionsRoute
}