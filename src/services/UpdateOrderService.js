import customerOrderRepository from "../repositories/customerOrderRepository";

class UpdateOrderService {
    async execute(order, orderId) {

        const customerOrder = {
            id: orderId,
            customer_name: order.customer_name,
            notes: order.notes,
            payment_type: order.payment_type,
            status: order.status,
        }

        const orderRepository = await customerOrderRepository()
        await orderRepository.save(customerOrder)

        const updatedOrder = await orderRepository.findOne({
            where: { id: customerOrder.id },
            join: {
                alias: "customer_order",
                leftJoinAndSelect: {
                    "orderItems": "customer_order.orderItems",
                    "products": "orderItems.product"
                }
            }
        })

        return updatedOrder;
    }

}

export default UpdateOrderService;