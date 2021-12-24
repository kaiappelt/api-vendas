import { getCustomRepository } from "typeorm";
import Estoque from "../entities/Estoque";
import EstoqueRepository from "../repositories/EstoqueRepository";

interface IRequest {
    produto_uid: string;
    quantidade: number;
}

class CreateEstoqueService {
    public async execute({
        produto_uid,
        quantidade,
    }: IRequest): Promise<Estoque> {
        const estoqueRepository = getCustomRepository(EstoqueRepository);

        const newEstoque = estoqueRepository.create({
            produto_uid,
            quantidade,
        });

        await estoqueRepository.save(newEstoque);

        return newEstoque;
    }
}

export default CreateEstoqueService;