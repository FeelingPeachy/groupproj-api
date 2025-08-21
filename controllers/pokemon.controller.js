require('dotenv').config();
const axios = require('axios');
const { Pokemon } = require('../models/pokemon'); 

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
        const { name, height, weight, base_experience, active } = req.body;

        // Create a new Pokemon instance using await and the .create function
        const addPokemon = await Pokemon.create({
            name,
            height,
            weight,
            base_experience,
            active,
            });
        
        // return status of 201 created
        return res.status(201).json({
            "message" : "pokemon succsesfully added to the pokedexkc",
            "pokemon" : addPokemon
        });
        
    } catch (err) {
        // catch errors and return status 500
        console.error(err.message);
        return res.status(500).json({ error: 'Failed to add Pokemon to deck' });
    }
};
  

// Get the active deck of Pokemon
// const getActiveDeck = async (req, res) => {
//     // Fetch the active deck from the database

//     // Use findAll to get all Pokemon in the active deck
    
//     // Log the fetched active deck
    
//     //return response
    
//     //catch any errors
 
// };

// function removeFromDeck = async (req, res) => {
//     // Remove a Pokemon from the active deck

//     //get the id from the request parameters
  

//   // Find the Pokemon by ID

//     //use findByPk to get the Pokemon and use await
  

//     // Check if the Pokemon exists
    
//         //if not return status 404
   
//     //await the destroy method
 
//     // Return a success message
   
   
//     // Log the removal action
  
//     // Handle errors
   
// };


module.exports = { 
    getPokemonByName,
    addPokemonToDeck,
    getActiveDeck
    };

