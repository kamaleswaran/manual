import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Options } from "./options"
import { Products } from "./products"

@Entity()
export class ProductOptions {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Options, (option) => option.id)
    option: Options

    @ManyToOne(() => Products, (product) => product.id)
    excludeproduct: Products
}