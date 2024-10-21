import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
// import { ProductOptions } from "./product-options"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // @OneToMany(() => ProductOptions, (productOption) => productOption.excludeproduct)
    // productOptions: ProductOptions[]
}