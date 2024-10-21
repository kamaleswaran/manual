import { QuestionsResponseSchemaType } from "../schema/questions-response";
import { getAllQuestions } from "../services/database-service";

export const getRecommendedProductQuestions = async (): Promise<QuestionsResponseSchemaType> => {
    return await getAllQuestions();
}