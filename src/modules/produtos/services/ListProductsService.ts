import { getCustomRepository } from "typeorm";
import Product from "../entities/Product";
import ProductRepository from "../repositories/ProductRepository";

class ListProductsService {
    public async execute(): Promise<Product[]> {
        const productRepository = getCustomRepository(ProductRepository);

        const products = await productRepository.find();

        return products;
    }
}
export default ListProductsService;