import { getCustomRepository } from "typeorm";
import Categoria from "../entities/Categoria";
import CategoriaRepository from "../repositories/CategoriaRepository";

interface IRequest {
    nome: string;
    descricao: string;
    tag: string;
}

class CreateCategoriaService {
    public async execute({
        nome,
        descricao,
        tag,
    }: IRequest): Promise<Categoria> {
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        const newCategoria = categoriaRepository.create({
            nome,
            descricao,
            tag,
        });

        await categoriaRepository.save(newCategoria);

        return newCategoria;
    }
}

export default CreateCategoriaService;