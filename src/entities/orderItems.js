import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "order_items",
    tableName: "order_items",
    columns: {
        id: {
            primary: true,
            type: "uuid",
        },
        order_id: {
            type: "varchar"
        },
        product_id: {
            type: "varchar"
        },
        quantity: {
            type: "integer"
        },
        updated_at: {
            type: "date",
            updateDate: true
        },
        created_at: {
            type: "date",
            createDate: true
        },
    },
    relations: {
        product: {
            type: "many-to-one",
            target: "product",
            joinColumn: {
                name: "product_id",
                referencedColumnName: "id"
            }
        },
        order: {
            type: "many-to-one",
            target: "customer_order",
            joinColumn: {
                name: "order_id",
                referencedColumnName: "id"
            },
        }
    }
});