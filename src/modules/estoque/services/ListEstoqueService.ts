import { getCustomRepository } from "typeorm";
import Estoque from "../entities/Estoque";
import EstoqueRepository from "../repositories/EstoqueRepository";

class ListEstoqueService {
    public async execute(): Promise<Estoque[]> {
        const estoqueRepository = getCustomRepository(EstoqueRepository);

        const estoque = await estoqueRepository.find();

        return estoque;
    }
}
export default ListEstoqueService;