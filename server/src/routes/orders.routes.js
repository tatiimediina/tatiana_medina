import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { applyValidations } from "../validations/apply.validations.js";
import { createOrdenValidations } from "../validations/orders.validations.js";
import { validateJwt } from "../middlewares/validateJwt.js";

const ordersRouter = Router();

// ! NO FUNCIONA LA RUTA /orders
ordersRouter.get("/orders", applyValidations, getOrdersCtrl);

// ! FALTAN VALIDACIONES DE DATOS
ordersRouter.post(
  "/orders",
  createOrdenValidations,
  applyValidations,
  validateJwt,
  createOrderCtrl
);

export { ordersRouter };
