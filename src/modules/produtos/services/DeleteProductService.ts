import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import ProductRepository from "../repositories/ProductRepository";

interface IRequest {
    uid: string;
}

class DeleteProductService {
    public async execute({
        uid
    }: IRequest): Promise<void> {
        const productRepository = getCustomRepository(ProductRepository);

        const product = await productRepository.findOne(uid);

        if(!product) {
           throw new AppError("Registro não encontrado", 412);
        }

        await productRepository.remove(product);
    }

}

export default DeleteProductService;