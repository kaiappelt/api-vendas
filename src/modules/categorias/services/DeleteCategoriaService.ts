import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import CategoriaRepository from "../repositories/CategoriaRepository";

interface IRequest {
    uid: string;
}

class DeleteCategoriaService {
    public async execute({
        uid
    }: IRequest): Promise<void> {
        const categoriaRepository = getCustomRepository(CategoriaRepository);

        const categoria = await categoriaRepository.findOne(uid);

        if(!categoria) {
           throw new AppError("Registro não encontrado", 412);
        }

        await categoriaRepository.remove(categoria);
    }

}

export default DeleteCategoriaService;