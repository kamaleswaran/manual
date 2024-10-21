import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Options } from "./options"

@Entity()
export class Questions {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @OneToMany(() => Options, (option) => option.question)
    options: Options[]
}