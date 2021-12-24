import { Request, Response } from "express";
import CreateProductService from "../services/CreateProductService";
import DeleteProductService from "../services/DeleteProductService";
import ListProductsService from "../services/ListProductsService";
import UpdateProductService from "../services/UpdateProductService";

export default class ProductsController {

    public async index(
            request: Request, 
            response: Response
        ): Promise<Response> {
        const listProducts = new ListProductsService();

        const products = await listProducts.execute();
        
        return response.json(products);
    }

    public async create(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { nome, descricao, categoria_uid } = request.body;

        const createProduct = new CreateProductService();

        const newProduct = await createProduct.execute({
            nome,
            descricao,
            categoria_uid
        });

        return response.json(newProduct);
    }

    public async update(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const { nome, descricao, categoria_uid } = request.body;

        const updateProduct = new UpdateProductService();

        const product = await updateProduct.execute({
            uid,
            nome,
            descricao,
            categoria_uid
        });

        return response.json(product);
    }

    
    public async delete(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const deleteProduct = new DeleteProductService();

        await deleteProduct.execute({uid});

        return response.json([]);
    }
    
}

