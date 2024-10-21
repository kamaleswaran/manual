import * as supertest from "supertest";
import { app } from "../src"
import { getRecommendedProductQuestions } from '../src/controllers';
import { QuestionsResponseSchemaType } from "../src/schema/questions-response";

jest.mock("../src/controllers", () => ({
    getRecommendedProductQuestions: jest.fn(),
    getRecommendedProducts: jest.fn(),
}));

describe ("GET questions", () => {
    beforeAll(async () => {
        await app.ready();
      });
    
      afterAll(() => {
        app.close();
      });

      beforeEach(() => {
        jest.clearAllMocks();
      })

    test("should get questions and options successfully", async () => {
        //Given
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

        (getRecommendedProductQuestions as jest.Mock).mockResolvedValue(mockQuestions)

        //When
        const response = await supertest(app.server)
        .get('/questions')
        .expect(200);
        
        //Then
        expect(getRecommendedProductQuestions).toHaveBeenCalledTimes(1);
        expect(response.body).toEqual(mockQuestions);
    });


    test("should throw 500 when server fails to get list of questions", async () => {
        //Given
        (getRecommendedProductQuestions as jest.Mock).mockResolvedValue(new Error('Server failed to fetch questions'));

        //When
        const response = await supertest(app.server)
        .get('/questions')
        .expect(500);
        
        //Then
        expect(getRecommendedProductQuestions).toHaveBeenCalledTimes(1);
    });
})