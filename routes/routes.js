const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');

// this routes folder is supposed to be for pokemons

// -------------------------TODO: Implement Pokemon routes----------------------------

// get /pokemon/:name

router.get('/pokemon/:name', PokemonController.getPokemonByName);

// POST (ADD) to pokedeck
router.post('/pokedeck', PokemonController.addPokemonToDeck);

// get /active-deck
router.get('/active-deck', PokemonController.getActiveDeck);

// // delete-from-deck/:id
// router.delete('/delete-from-deck/:id', PokemonController.removeFromDeck);


module.exports = router;