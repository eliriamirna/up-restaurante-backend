import customerOrderRepository from "../repositories/customerOrderRepository";
import orderItemsRepository from "../repositories/orderItemsRepository";
import CustomerOrder from "../models/CustomerOrder";
import OrderItems from "../models/OrderItems";

class CreateOrderService {
  async execute(order) {
    const { customer_name, notes, payment_type, items } = order;
    const customerOrder = new CustomerOrder({
      customer_name,
      notes,
      payment_type,
      total_value: 0,
      status: "enviado",
    });

    const arrayItems = items.map((item) => {
      const { product_id, quantity } = item;
      return new OrderItems({
        product_id,
        quantity,
        order_id: customerOrder.id,
      });
    });

    const orderRepository = await customerOrderRepository();
    await orderRepository.save(customerOrder);

    const itemsRepository = await orderItemsRepository();
    await itemsRepository.save(arrayItems);

    const createdOrder = await orderRepository.findOne({
      where: { id: customerOrder.id },
      join: {
        alias: "customer_order",
        leftJoinAndSelect: {
          orderItems: "customer_order.orderItems",
          products: "orderItems.product",
        },
      },
    });

    return createdOrder;
  }
}

export default CreateOrderService;
