import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEstoque1640303735965 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "estoque",
                columns: [
                    {
                        name: "uid",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()",
                    },
                    {
                        name: "produto_uid",
                        type: "uuid",
                        generationStrategy: "uuid",
                    },
                    {
                        name: "quantidade",
                        type: "int",
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
                        name: "estoqueProdutoId",
                        referencedTableName: "produtos",
                        referencedColumnNames: ["uid"],
                        columnNames: ["produto_uid"]
                    }
                ]
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("estoque");
    }

}
