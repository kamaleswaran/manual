import * as supertest from "supertest";
import { app } from "../src"

jest.mock("../src/controllers", () => ({
    getRecommendedProductQuestions: jest.fn(),
    getRecommendedProducts: jest.fn(),
}));

describe ("GET health check", () => {
    beforeAll(async () => {
        await app.ready();
      });
    
      afterAll(() => {
        app.close();
      });

    test("should ping health check endpoint successfully", async () => {
        //When
        const response = await supertest(app.server)
        .get('/health')
        .expect(200);

        //Then
        expect(response.text).toEqual('ping');
    });
});