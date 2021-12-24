import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository";

interface IRequest {
    uid: string;
    nome: string;
    descricao: string;
    categoria_uid: string;
}

class UpdateProductService {
    public async execute({
        uid,
        nome,
        descricao,
        categoria_uid
    }: IRequest): Promise<Product> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(uid);

        if(!product) {
           throw new AppError("Registro não encontrado", 412);
        }

        product.nome = nome;
        product.descricao = descricao;
        product.categoria_uid = categoria_uid;

        await productRepository.save(product);

        return product;
    }

}

export default UpdateProductService;