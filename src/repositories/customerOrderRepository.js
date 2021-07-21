import { getRepository } from "typeorm";

const customerOrderRepository = async() => {

    const customerOrderRepository = await getRepository("customer_order");

    return customerOrderRepository
}

export default customerOrderRepository;