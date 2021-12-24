import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import EstoqueRepository from "../repositories/EstoqueRepository";

interface IRequest {
    uid: string;
}

class DeleteEstoqueService {
    public async execute({
        uid
    }: IRequest): Promise<void> {
        const estoqueRepository = getCustomRepository(EstoqueRepository);

        const estoque = await estoqueRepository.findOne(uid);

        if(!estoque) {
           throw new AppError("Registro não encontrado", 412);
        }

        await estoqueRepository.remove(estoque);
    }

}

export default DeleteEstoqueService;