import { getCustomRepository } from "typeorm";
import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository";

interface IRequest {
    nome: string;
    descricao: string;
    categoria_uid: string;
}

class CreateProductService {
    public async execute({
        nome,
        descricao,
        categoria_uid
    }: IRequest): Promise<Product> {
        const productReporitory = getCustomRepository(ProductRepository);

        const newProduct = productReporitory.create({
            nome,
            descricao,
            categoria_uid,
        });

        await productReporitory.save(newProduct);

        return newProduct;
    }
}

export default CreateProductService;