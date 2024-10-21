import { getAllQuestions } from "../services/database-service";
import { getRecommendedProductQuestions } from "./questions";
import { QuestionsResponseSchemaType } from "../schema/questions-response";

jest.mock("../services/database-service", () => ({
    getAllQuestions: jest.fn(),
  }));

describe("questions", () => {
    test("getRecommendedProductQuestions", async () => {
        const mockQuestions: QuestionsResponseSchemaType = [{
            id: 1,
            text: "Question 1",
            options: [{
                id: 1,
                text: "Yes",
                followup_question: {
                    id: 2
                }
            }]
        }];
      
        (getAllQuestions as jest.Mock).mockResolvedValue(mockQuestions);        

        const response = await getRecommendedProductQuestions();

        expect(response).toEqual(mockQuestions);
    })
})