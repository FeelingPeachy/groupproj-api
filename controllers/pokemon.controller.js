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
          active: true, // default to active if fetched
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
  

module.exports = { getPokemonByName };