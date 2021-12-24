import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategorias1640303339981 implements MigrationInterface {

   
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categorias",
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
                        name: "tag",
                        type: "text",
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
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categorias");
    }

}
