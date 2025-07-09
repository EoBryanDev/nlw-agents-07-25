import { createQuestionRoute } from "./routes/create-questions.ts";
import { createRoomsRoute } from "./routes/create-room.ts";
import { getRoomsQuestionsRoute } from "./routes/get-room-questions.ts";
import { getRoomsRoute } from "./routes/get-rooms.ts";


export const public_routes = {
    createRoomsRoute,
    createQuestionRoute,
    getRoomsRoute,
    getRoomsQuestionsRoute
}