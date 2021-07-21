import { v4 as uuid } from "uuid";

export default class CustomerOrder {
  constructor({ customer_name, notes, total_value, status, payment_type }) {
    this.id = uuid();
    this.customer_name = customer_name;
    this.notes = notes;
    this.total_value = total_value;
    this.status = status;
    this.payment_type = payment_type;
  }
}
