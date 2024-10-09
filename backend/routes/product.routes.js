/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de venta de skates
 */

const express = require("express");
const router = express.Router();

const { findAll, findOne, create, update, remove } = require("../controllers/product.controller");

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtener todos los skates
 *     tags: [Products]
 *     description: Obtener una lista de los skates
 *     responses:
 *       200:
 *         description: Lista de skates disponibles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", findAll);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtener un producto por su ID
 *     tags: [Products]
 *     description: Obtener el skate especifico por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del skate buscado
 *     responses:
 *       200:
 *         description: Skate obtenido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: No fue posible encontrar el producto
 */
router.get("/:id", findOne);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Products]
 *     description: Crear un nuevo producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Producto creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: No fue posible hacer la creación
 */
router.post("/", create);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Actualizar un producto por su ID
 *     tags: [Products]
 *     description: Actualizar un producto
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: No fue posible actualizar la info
 *       404:
 *         description: Producto no encontrado
 */
router.put("/:id", update);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Eliminar producto por su ID
 *     tags: [Products]
 *     description: Eliminar un producto existente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El ID del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado con éxito
 *       404:
 *         description: Producto no encontrado
 */
router.delete("/:id", remove);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: El ID unico del producto
 *         name:
 *           type: string
 *           description: El nombre del producto
 *         description:
 *           type: string
 *           description: La descripción del producto
 *         price:
 *           type: number
 *           description: El precio del producto
 *       required:
 *         - name
 *         - description
 *         - price
 *       example:
 *         id: "123e4567-e89b-12d3-a456-426614174000"
 *         name: "Skate Shortboard"
 *         description: "Skate de tipo urbano y de velocidad"
 *         price: 9.99
 */