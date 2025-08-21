const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller.js');
// Correctly import named middlewares from the middleware file
const { logger, agent } = require('../middleware/middleware.js');
// this routes folder is supposed to be for pokemons

// -------------------------TODO: Implement Pokemon routes----------------------------

/**
 * @swagger
 * /pokemon/{name}:
 *   get:
 *     summary: Get a Pokemon by name
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched the pokemon
 */
router.get('/pokemon/:name', logger, agent, PokemonController.getPokemonByName);

/**
 * @swagger
 * /pokedeck:
 *   post:
 *     summary: Add a Pokemon to the deck
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Pokemon added to deck
 *       400:
 *         description: Invalid input
 */
router.post('/pokedeck', logger, agent, PokemonController.addPokemonToDeck);

// get /active-deck
/**
 * @swagger
 * /active-deck:
 *   get:
 *     summary: Get all active Pokemon in the deck
 *     responses:
 *       200:
 *         description: Successfully fetched active deck
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   type:
 *                     type: string
 *                   active:
 *                     type: boolean
 */
router.get('/active-deck', PokemonController.getActiveDeck);

/**
 * @swagger
 * /delete-from-deck/{id}:
 *   delete:
 *     summary: Remove a Pokemon from the deck by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Pokemon removed from deck
 *       404:
 *         description: Pokemon not found
 */
router.delete('/delete-from-deck/:id', logger, agent, PokemonController.removeFromDeck);

router.patch('/update-active-status/:id', logger, agent, PokemonController.updateActiveStatus);

module.exports = router;