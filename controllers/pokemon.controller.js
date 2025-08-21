require('dotenv').config();
const axios = require('axios');
const Pokemon = require('../models/pokemon'); 

// Get a Pokemon by name from the external API using the api base url
const getPokemonByName = async (req, res) => {
    try {
      // Get the Pokemon name from the request parameters
      const { name } = req.params;
  
      // try to fetch the Pokemon from the external API
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  
      // Check if the response is successful
      if (response.status === 200) {
        const data = response.data;
     
        // when fetching the response we want to extract:
        // name, height, weight, base_experience, active
        const pokemon = {
          name: data.name,
          type: data.types[0].type.name,
          height: data.height,
          weight: data.weight,
          base_experience: data.base_experience,
          active: true,
        };
  
        // If the Pokemon is found, return it in the response
        return res.status(200).json({
          "message" : "successfully fetched the pokemon",
          "pokemon" : pokemon
        });
      }
    } catch (err) {
  
      // Handle errors
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to fetch Pokemon' });
    }
  };

// Add a new Pokemon to the deck
const addPokemonToDeck = async (req, res) => {
    try {
        // // Get the Pokemon details from the request body
        const { name, type, height, weight, base_experience, active } = req.body;
        console.log(req.body)

        // Create a new Pokemon instance using await and the .create function
        const addPokemon = await Pokemon.create({
            name : name,
            type: type,
            height: height,
            weight : weight,
            base_experience : base_experience,
            active: active,
            });
        
        // return status of 201 created
        return res.status(201).json({
            "message" : "pokemon succsesfully added to the pokedexkc",
            "pokemon" : addPokemon
        });
        
    } catch (err) {
        // catch errors and return status 404
        console.error(err.message);
        return res.status(404).json({ error: 'Failed to add Pokemon to deck' });
    }
};
  

// Get the active deck of Pokemon
const getActiveDeck = async (req, res) => {

    // Fetch the active deck from the database
    try {
        
        // Use findAll to get all Pokemon in the active deck
        const activeDeck = await Pokemon.findAll({ where: { active: true },});
        return res.status(200).json(activeDeck);
    
    } 
    //catch any errors
    catch (err) {
        return res.status(500).json({ error: 'Failed to fetch active deck' });
    } 
};


  // Remove a Pokemon from the active deck
  const removeFromDeck = async (req, res) => {
      const id = req.params.id;

      try {
          // Find the Pokemon by ID
          const pokemon = await Pokemon.findByPk(id);

          // Check if the Pokemon exists
          if (!pokemon) {
              return res.status(404).json({ error: 'Pokemon not found' });
          }

          // Remove the Pokemon from the deck
          await pokemon.destroy();

          // Return a success message
          return res.status(200).json({ message: 'Pokemon removed from deck successfully' });
      } catch (err) {
          // Handle errors
          console.error(err.message);
          return res.status(500).json({ error: 'Failed to remove Pokemon from deck' });
      }
  };


  //update the active column to either true or false
  const updateActiveStatus = async (req, res) => {

      const id = req.params.id;
      const active = req.body;

      try {
          // Find the Pokemon by ID
          const pokemon = await Pokemon.findByPk(id);

          // Check if the Pokemon exists
          if (!pokemon) {
              return res.status(404).json({ error: 'Pokemon not found' });
          }

          // Update the active status
          pokemon.active = active.active;
          await pokemon.save();

          // Return a success message
          return res.status(200).json({ message: 'Pokemon active status updated successfully' });
      } catch (err) {
          // Handle errors
          console.error(err.message);
          return res.status(500).json({ error: 'Failed to update Pokemon active status' });
      }
  };

module.exports = { 
    getPokemonByName,
    addPokemonToDeck,
    getActiveDeck,
    removeFromDeck,
    updateActiveStatus
    };

