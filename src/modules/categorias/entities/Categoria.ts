import{
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity ("categorias")
class Categoria{
    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    tag: string;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    editado_em: Date;
}

export default Categoria;