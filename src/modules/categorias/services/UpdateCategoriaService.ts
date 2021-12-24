import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import Categoria from "../entities/Categoria";
import CategoriaRepository from "../repositories/CategoriaRepository";

interface IRequest {
    uid: string;
    nome: string;
    descricao: string;
    tag: string;
}

class UpdateCategoriaService {
    public async execute({
        uid,
        nome,
        descricao,
        tag,
    }: IRequest): Promise<Categoria> {
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        const categoria = await categoriaRepository.findOne(uid);

        if(!categoria) {
           throw new AppError("Registro não encontrado", 412);
        }

        categoria.nome = nome;
        categoria.descricao = descricao;
        categoria.tag = tag;

        await categoriaRepository.save(categoria);

        return categoria;
    }
}

export default UpdateCategoriaService;