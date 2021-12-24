import { Request, Response } from "express";
import CreateCategoriaService from "../services/CreateCategoriaService";
import DeleteCategoriaService from "../services/DeleteCategoriaService";
import ListCategoriasService from "../services/ListCategoriasService";
import UpdateCategoriaService from "../services/UpdateCategoriaService";

export default class CategoriasController {

    public async index(
            request: Request, 
            response: Response
        ): Promise<Response> {
        const listCategorias = new ListCategoriasService();

        const categorias = await listCategorias.execute();
        
        return response.json(categorias);
    }

    public async create(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { nome, descricao, tag } = request.body;

        const createCategorias = new CreateCategoriaService();

        const newCategoria = await createCategorias.execute({
            nome,
            descricao,
            tag
        });

        return response.json(newCategoria);
    }

    public async update(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const { nome, descricao, tag } = request.body;

        const updateCategoria = new UpdateCategoriaService();

        const categoria = await updateCategoria.execute({
            uid,
            nome,
            descricao,
            tag
        });

        return response.json(categoria);
    }

    public async delete(
        request: Request, 
        response: Response
    ): Promise<Response> {
        const { uid } = request.params;

        const deleteCategoria = new DeleteCategoriaService();

        await deleteCategoria.execute({uid});

        return response.json([]);
    }
}

