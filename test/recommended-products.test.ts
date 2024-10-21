import * as supertest from "supertest";
import { app } from "../src"
import { getRecommendedProducts } from '../src/controllers';
import { RecommendedProductRequestSchemaType } from "../src/schema/recommended-product-request";
import { Products } from "../src/db/entity";

jest.mock("../src/controllers", () => ({
    getRecommendedProductQuestions: jest.fn(),
    getRecommendedProducts: jest.fn(),
}));

const selectedOptions: RecommendedProductRequestSchemaType = [{
    "id": 1,
    "selectedOptionId": 1
}, {
    "id": 2,
    "selectedOptionId": 1
}];

describe ("POST recommended products", () => {
    beforeAll(async () => {
        await app.ready();
      });
    
      afterAll(() => {
        app.close();
      });

      beforeEach(() => {
        jest.clearAllMocks();
      })

    test("should post question id and select option id to get recommened product list successfully", async () => {
        //Given
        const mockRecommendedProducts: Products[] = [{
            id: 1,
            name: "product 1"
        }, {
            id: 4,
            name: "product 4"
        }];

        (getRecommendedProducts as jest.Mock).mockResolvedValue(mockRecommendedProducts)

        //When
        const response = await supertest(app.server)
        .post('/recommended-products')
        .send(selectedOptions)
        .expect(200);
        
        //Then
        expect(getRecommendedProducts).toHaveBeenCalledTimes(1);
        expect(response.body).toEqual(mockRecommendedProducts);
    });

    test("should throw 500 when server fails to get list of recommended products", async () => {
        //Given
        (getRecommendedProducts as jest.Mock).mockResolvedValue(new Error('Server failed to get recommended products'));

        //When
        const response = await supertest(app.server)
        .post('/recommended-products')
        .send(selectedOptions)
        .expect(500);
        
        //Then
        expect(getRecommendedProducts).toHaveBeenCalledTimes(1);
    });
})