import { v4 as uuid } from "uuid";

export default class OrderItems {
    constructor({ order_id, product_id, quantity }) {
        this.id = uuid();
        this.order_id = order_id;
        this.product_id = product_id;
        this.quantity = quantity;
    }
}