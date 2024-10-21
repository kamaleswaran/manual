import { getAllProducts, getExcludedProducts } from "../services/database-service";
import { getRecommendedProducts } from "./recommended-products";
import { RecommendedProductRequestSchemaType } from "../schema/recommended-product-request";
import { Products } from "../db/entity";

jest.mock("../services/database-service", () => ({
    getAllProducts: jest.fn(),
    getExcludedProducts: jest.fn(),
  }));

describe("recommended-products", () => {
    test("getRecommendedProducts", async () => {
        //Given
        const mockProducts: Products[] = [{
            id: 1,
            name: "product 1"
        }, {
            id: 2,
            name: "product 2"
        }, {
            id: 3,
            name: "product 3"
        }, {
            id: 4,
            name: "product 4"
        }];

        const excludeProducts = [{
            id: 1
        }, {
            id: 3
        }];
      
        (getAllProducts as jest.Mock).mockResolvedValue(mockProducts);
        (getExcludedProducts as jest.Mock).mockResolvedValue(excludeProducts);

        const selectedOptions: RecommendedProductRequestSchemaType = [
            {
                "id": 1,
                "selectedOptionId": 1
            },
            {
                "id": 2,
                "selectedOptionId": 1
            }
        ];

        //When
        const response = await getRecommendedProducts(selectedOptions);

        //Then
        expect(response).toEqual( [{
            id: 2,
            name: "product 2"
        }, {
            id: 4,
            name: "product 4"
        }]);

        expect(getAllProducts).toHaveBeenCalledTimes(1);
        expect(getExcludedProducts).toHaveBeenCalledTimes(2);
    })
})