import customerOrderRepository from "../repositories/customerOrderRepository";
import CreateOrderService from "../services/CreateOrderService";
import UpdateOrderService from "../services/UpdateOrderService";

class OrderController {
  async show(req, res) {
    const repository = await customerOrderRepository();

    const orders = await repository.find({
      where: { status: "enviado" },
      join: {
        alias: "customer_order",
        leftJoinAndSelect: {
          orderItems: "customer_order.orderItems",
          products: "orderItems.product",
        },
      },
    });

    return res.json(orders);
  }

  async create(req, res) {
    const order = req.body;

    const service = new CreateOrderService();
    const createdOrder = await service.execute(order);

    return res.status(201).json(createdOrder);
  }

  async update(req, res) {
    const order = req.body;
    const { orderId } = req.params;

    const service = new UpdateOrderService();
    const updatedOrder = await service.execute(order, orderId);

    return res.status(201).json(updatedOrder);
  }
}

export { OrderController };
