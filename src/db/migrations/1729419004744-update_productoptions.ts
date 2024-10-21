import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateProductoptions1729419004744 implements MigrationInterface {
    name = 'UpdateProductoptions1729419004744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_options" DROP CONSTRAINT "FK_96d8f73d05e681974c07b99ee5d"`);
        await queryRunner.query(`ALTER TABLE "product_options" RENAME COLUMN "productId" TO "excludeproductId"`);
        await queryRunner.query(`ALTER TABLE "product_options" ADD CONSTRAINT "FK_5b1dc9b2b6f1cd76de7ad24c5cd" FOREIGN KEY ("excludeproductId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_options" DROP CONSTRAINT "FK_5b1dc9b2b6f1cd76de7ad24c5cd"`);
        await queryRunner.query(`ALTER TABLE "product_options" RENAME COLUMN "excludeproductId" TO "productId"`);
        await queryRunner.query(`ALTER TABLE "product_options" ADD CONSTRAINT "FK_96d8f73d05e681974c07b99ee5d" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
