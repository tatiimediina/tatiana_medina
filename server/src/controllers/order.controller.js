import { createOrder, getOrders } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  if (
    coffee !== "Espresso" ||
    coffee !== "Americano" ||
    coffee !== "Cappuccino"
  ) {
    return res.json({ message: "Datos inválidos" });
  } else {
    const order = createOrder(coffee, userId);
  }

  res.status(201).json(order);
};

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};
