import express from "express";
import * as controller from "./../controllers/exampleController";

const router = express.Router();

/**
 * @swagger
 * /api/example:
 *   get:
 *     tags:
 *       - Example
 *     summary: Get all examples
 *     description: Returns all examples
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of examples
 */
router.get("/", controller.getAllExamples);

/**
 * @swagger
 * /api/example/{id}:
 *   get:
 *     tags:
 *       - Example
 *     summary: Get example by ID
 *     description: Returns a single example
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Example ID
 *         in: path
 *         required: true
 *         type: integer
 *         minimum: 1
 *     responses:
 *       200:
 *         description: A single example
 */
router.get("/:id", controller.getExampleById);

/**
 * @swagger
 * /api/example:
 *   post:
 *     tags:
 *       - Example
 *     summary: Create a new example
 *     description: Creates a new example
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: example
 *         description: Example object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Example'
 *     responses:
 *       201:
 *         description: Successfully created
 */
router.post("/", controller.createExample);

/**
 * @swagger
 * /api/example/{id}:
 *   put:
 *     tags:
 *       - Example
 *     summary: Update an example
 *     description: Updates an example
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Example ID
 *         in: path
 *         required: true
 *         type: integer
 *         minimum: 1
 *       - name: example
 *         description: Example object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Example'
 *     responses:
 *       200:
 *         description: Successfully updated
 *       404:
 *         description: Example not found
 */
router.put("/:id", controller.updateExample);

/**
 * @swagger
 * /api/example/{id}:
 *   delete:
 *     tags:
 *       - Example
 *     summary: Delete an example
 *     description: Deletes an example
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Example ID
 *         in: path
 *         required: true
 *         type: integer
 *         minimum: 1
 *     responses:
 *       204:
 *         description: Successfully deleted
 *       404:
 *         description: Example not found
 */
router.delete("/:id", controller.deleteExample);

export default router;
