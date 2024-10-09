const express = require("express");
const router = express.Router();

const { findAll, findOne, create, update, remove } = require("../controllers/order.controller");


/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Gestión de ordenes de compra
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtener lista de todas las ordenes de compra
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Lista de las ordenes de compra
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.get("/", findAll);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Obtener una orden de compra por id
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La orden de compra y su id
 *     responses:
 *       200:
 *         description: La orden de compra
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: La orden de compra no fue encontrada
 */
router.get("/:id", findOne);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Crear una nueva orden de compra
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: La orden fue creada con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: No fue posible crear la orden
 */
router.post("/", create);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Actualizar una orden de compra existente
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La id de la orden
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: La orden fue actualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       400:
 *         description: No fue posible actualizar la orden
 *       404:
 *         description: La orden no fue encontrada
 */
router.put("/:id", update);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Eliminar una orden existente
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La id de la orden
 *     responses:
 *       200:
 *         description: La orden fue eliminada
 *       404:
 *         description: La orden no fue encontrada
 */
router.delete("/:id", remove);

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: Id unico de la orden
 *         customerId:
 *           type: string
 *           description: Id del cliente
 *         items:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/OrderItem'
 *         total:
 *           type: number
 *           format: float
 *           description: Precio total de la orden
 *       required:
 *         - customerId
 *         - items
 *       example:
 *         id: "12345"
 *         customerId: "67890"
 *         items:
 *           - productId: "p123"
 *             quantity: 2
 *             price: 9.99
 *         total: 19.98
 *
 *     OrderItem:
 *       type: object
 *       properties:
 *         productId:
 *           type: string
 *           description: Id del producto
 *         quantity:
 *           type: integer
 *           description: Cantidad del producto
 *         price:
 *           type: number
 *           format: float
 *           description: Precio del producto
 *       required:
 *         - productId
 *         - quantity
 *         - price
 *       example:
 *         productId: "p123"
 *         quantity: 2
 *         price: 9.99
 */

module.exports = router;