import AppDataSource from "../db/data-source";
import { Options, ProductOptions, Products, Questions } from "../db/entity";

const questionRepository = AppDataSource.getRepository(Questions);
const productRepository = AppDataSource.getRepository(Products);
const optionsRepository = AppDataSource.getRepository(Options);
const productOptionsRepository = AppDataSource.getRepository(ProductOptions);

export const getAllQuestions = async() => {
    return await questionRepository
    .createQueryBuilder('questions')
    .leftJoinAndSelect('questions.options', 'options')
    .leftJoinAndSelect('options.followup_question', 'followup_question')
    .select(['questions.id', 'questions.text', 'options.id', 'options.text', 'followup_question.id'])
    .getMany();
}

export const getAllProducts = async() => {
    return await productRepository.find();
}

export const getExcludedProducts = async(id: number) => {
    return await productOptionsRepository
    .createQueryBuilder('productOptions')
    .innerJoinAndSelect('productOptions.option', 'options')
    .innerJoinAndSelect('productOptions.excludeproduct', 'excludeproduct')
    .select('excludeproduct.id', 'id')
    .where('options.id = :id', {id})
    .getRawMany();
}