import { ChoiceModel } from "./choice-model";

export interface QuestionListModel {
    id: number,
    question: string,
    image_url: string,
    thumb_url: string,
    published_at: string,
    choices: ChoiceModel[],
}