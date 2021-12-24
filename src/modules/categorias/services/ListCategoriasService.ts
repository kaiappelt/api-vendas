import { getCustomRepository } from "typeorm";
import Categoria from "../entities/Categoria";
import CategoriaRepository from "../repositories/CategoriaRepository";

class ListCategoriasService {
    public async execute(): Promise<Categoria[]> {
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        const categorias = await categoriaRepository.find();

        return categorias;
    }
}
export default ListCategoriasService;