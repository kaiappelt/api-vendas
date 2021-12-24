import { Request, Response } from "express";
import CreateEstoqueService from "../services/CreateEstoqueService";
import DeleteEstoqueService from "../services/DeleteEstoqueService";
import ListEstoqueService from "../services/ListEstoqueService";
import UpdateEstoqueService from "../services/UpdateEstoqueService";

export default class EstoqueController {

    public async index(
            request: Request, 
            response: Response
        ): Promise<Response> {
        const listEstoque = new ListEstoqueService();

        const estoque = await listEstoque.execute();
        
        return response.json(estoque);
    }

    public async create(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { produto_uid, quantidade } = request.body;

        const createEstoque = new CreateEstoqueService();

        const newEstoque = await createEstoque.execute({
            produto_uid,
            quantidade,
        });

        return response.json(newEstoque);
    }

    public async update(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const { produto_uid, quantidade } = request.body;

        const updateEstoque = new UpdateEstoqueService();

        const estoque = await updateEstoque.execute({
            uid,
            produto_uid,
            quantidade,
        });

        return response.json(estoque);
    }

    public async delete(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const deleteEstoque = new DeleteEstoqueService();

        await deleteEstoque.execute({uid});

        return response.json([]);
    }
}

