import AppError from "src/AppError";
import { getCustomRepository } from "typeorm";
import Estoque from "../entities/Estoque";
import EstoqueRepository from "../repositories/EstoqueRepository";

interface IRequest {
    uid: string;
    produto_uid: string;
    quantidade: number;
}

class UpdateEstoqueService {
    public async execute({
        uid,
        produto_uid,
        quantidade,
    }: IRequest): Promise<Estoque> {
        const estoqueRepository = getCustomRepository(EstoqueRepository);

        const estoque = await estoqueRepository.findOne(uid);

        if(!estoque) {
           throw new AppError("Registro não encontrado", 412);
        }

        estoque.produto_uid = produto_uid;
        estoque.quantidade = quantidade;

        await estoqueRepository.save(estoque);

        return estoque;
    }

}

export default UpdateEstoqueService;