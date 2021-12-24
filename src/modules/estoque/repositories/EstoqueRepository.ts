import { EntityRepository, Repository } from "typeorm";
import Estoque from "../entities/Estoque";

@EntityRepository(Estoque)
export default class EstoqueRepository extends Repository<Estoque> {}