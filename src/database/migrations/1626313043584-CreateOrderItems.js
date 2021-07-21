import { Table, TableForeignKey } from "typeorm";

export class CreateOrderItems1626313043584 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "order_items",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "quantity",
            type: "integer",
          },
          {
            name: "order_id",
            type: "uuid",
          },
          {
            name: "product_id",
            type: "uuid",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "datetime('now','localtime')",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "datetime('now','localtime')",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "order_items",
      new TableForeignKey({
        name: "FKOrder",
        referencedTableName: "customer_order",
        referencedColumnNames: ["id"],
        columnNames: ["order_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "order_items",
      new TableForeignKey({
        name: "FKProduct",
        referencedTableName: "product",
        referencedColumnNames: ["id"],
        columnNames: ["product_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable("order_items");
  }
}
