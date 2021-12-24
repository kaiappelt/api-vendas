import{
    Column,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
} from "typeorm";

@Entity ("produtos")
class Product{
    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    categoria_uid: string;
}

export default Product;