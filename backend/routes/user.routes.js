/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestión de los usuarios
 */

const express = require("express");
const router = express.Router();
const auth = require('../middleware/authorization');

const { findAll, findOne, create, update, remove } = require("../controllers/user.controller");

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener una lista con todos los usuarios
 *     tags: [Users]
 *     description: Obtener la lista de usuarios
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get("/", auth, findAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obtener un usuario especifico por su ID
 *     tags: [Users]
 *     description: Usuario obtenido por ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Obtener la ID del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no fue encontrado
 */
router.get("/:id", auth, findOne);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     description: Creación de un nuevo usuario
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: No fue posible crear usuario
 */
router.post("/", auth, create);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar un usuario existente por su ID
 *     tags: [Users]
 *     description: Actualizar un usuario
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La ID del usuario para actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: No fue posible actualizar los datos
 *       404:
 *         description: Usuario no encontrado
 */
router.put("/:id", auth, update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar un usuario por su ID
 *     tags: [Users]
 *     description: Eliminar un usuario buscando por su ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: La ID del usuario para eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado con éxito
 *       404:
 *         description: Usuario no fue encontrado
 */
router.delete("/:id", auth, remove);

module.exports = router;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: El ID unico de usuario
 *         username:
 *           type: string
 *           description: El username del usuario
 *         email:
 *           type: string
 *           description: El email del usuario
 *         password:
 *           type: string
 *           description: El password del usuario
 *       required:
 *         - username
 *         - email
 *         - password
 *       example:
 *         id: "123e4567-e89b-12d3-a456-426614174000"
 *         username: "sampleuser"
 *         email: "sampleuser@example.com"
 *         password: "securepassword"
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */