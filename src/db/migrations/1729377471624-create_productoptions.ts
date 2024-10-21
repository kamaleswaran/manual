import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductoptions1729377471624 implements MigrationInterface {
    name = 'CreateProductoptions1729377471624'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_options" ("id" SERIAL NOT NULL, "optionId" integer, "productId" integer, CONSTRAINT "PK_3916b02fb43aa725f8167c718e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product_options" ADD CONSTRAINT "FK_df6bae456c40d4b6e01ec20fefb" FOREIGN KEY ("optionId") REFERENCES "options"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product_options" ADD CONSTRAINT "FK_96d8f73d05e681974c07b99ee5d" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product_options" DROP CONSTRAINT "FK_96d8f73d05e681974c07b99ee5d"`);
        await queryRunner.query(`ALTER TABLE "product_options" DROP CONSTRAINT "FK_df6bae456c40d4b6e01ec20fefb"`);
        await queryRunner.query(`DROP TABLE "product_options"`);
    }

}
