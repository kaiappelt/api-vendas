import { EntityRepository, Repository } from "typeorm";
import Categoria from "../entities/Categoria";

@EntityRepository(Categoria)
export default class CategoriaRepository extends Repository<Categoria> {}