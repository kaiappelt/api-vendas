import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProdutos1640303501730 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "produtos",
                columns: [
                    {
                        name: "uid",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "nome",
                        type: "text",
                    },
                    {
                        name: "descricao",
                        type: "text",
                    },
                    {
                        name: "categoria_uid",
                        type: "uuid",
                        generationStrategy: "uuid",
                    },
                    {
                        name: "criado_em",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "editado_em",
                        type: "timestamp",
                        default: "now()",
                    }
                ],

                foreignKeys: [
                    {
                        name: "produtoCategoriaId",
                        referencedTableName: "categorias",
                        referencedColumnNames: ["uid"],
                        columnNames: ["categoria_uid"]
                    }
                ]
            }),
        );
}

public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("produtos");
}


}
