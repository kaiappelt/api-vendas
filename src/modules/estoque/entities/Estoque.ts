import{
    Column,
    CreateDateColumn,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity ("estoque")
class Estoque{
    @PrimaryGeneratedColumn("uuid")
    uid: string;

    @Column()
    @Generated("uuid")
    produto_uid: string;

    @Column()
    quantidade: number;

    @CreateDateColumn()
    criado_em: Date;

    @UpdateDateColumn()
    editado_em: Date;
}

export default Estoque;