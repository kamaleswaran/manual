import { Static, Type } from "@sinclair/typebox";

export const QuestionsResponseSchema = Type.Array(
    Type.Object({
        id: Type.Number(),
        text: Type.String(),
        options: Type.Array(
            Type.Object({
                id: Type.Number(),
                text: Type.String(),
                followup_question: Type.Object({
                    id: Type.Number()
                })
            })
        )
    })
);

export type QuestionsResponseSchemaType = Static<typeof QuestionsResponseSchema>
