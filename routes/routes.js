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

// POST (ADD) to pokedeck
router.post('/pokedeck', logger, agent, PokemonController.addPokemonToDeck);

// get /active-deck
router.get('/active-deck', PokemonController.getActiveDeck);

// delete-from-deck/:id
router.delete('/delete-from-deck/:id', logger, agent, PokemonController.removeFromDeck);

router.patch('/update-active-status/:id', logger, agent, PokemonController.updateActiveStatus);

module.exports = router;