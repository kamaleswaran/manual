import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Questions } from "./questions"

@Entity()
export class Options {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @ManyToOne(() => Questions, (question) => question.options)
    question: Questions

    @ManyToOne(() => Questions)
    followup_question: Questions
}