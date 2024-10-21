import { getAllProducts, getExcludedProducts } from "../services/database-service";
import { Products } from "../db/entity";
import { RecommendedProductRequestSchemaType } from "../schema/recommended-product-request";

export const getRecommendedProducts = async (selectedOptions: RecommendedProductRequestSchemaType): Promise<Products[]> => {
    let recommendedProducts: Products[] = await getAllProducts();
    for (const s of selectedOptions) {
        recommendedProducts = await filterProducts(recommendedProducts, s.selectedOptionId);
    }
    return recommendedProducts;
}

const filterProducts = async (products: Products[], selectedOptionId: number): Promise<Products[]> => {
    const excludedProducts = await getExcludedProducts(selectedOptionId);

    return products.filter(product =>
        !excludedProducts.some(excludedProduct => excludedProduct.id === product.id)
      );
}
