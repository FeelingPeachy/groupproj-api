require('dotenv').config();


//Access the base url for the api through 
// process.env.API_BASE_URL which is: https://pokeapi.co/api/v2


// Get a Pokemon by name from the external API using the api base url
function getPokemonByName = async (req, res) => {


    // Get the Pokemon name from the request parameters
    
    // try to fetch the Pokemon from the external API
   
        // Check if the response is successful]
        
        //when fetching the repsonse we want to extract the  pokemons name, height , weight , base expirience , active 
  
        // If the Pokemon is found, return it in the response
  
        // Add any additional processing or transformation of the Pokemon data here
       

        // Handle errors
    
};

// Add a new Pokemon to the deck
function addPokemonToDeck = async (req, res) => {
  // Get the Pokemon details from the request body

  //
 
    // Create a new Pokemon instance using await and the .create function
    
    //return status of //201 created
  
    //catch errors and return status 500
   
};
// Get the active deck of Pokemon
function getActiveDeck = async (req, res) => {
    // Fetch the active deck from the database

    // Use findAll to get all Pokemon in the active deck
    
    // Log the fetched active deck
    
    //return response
    
    //catch any errors
 
};

function removeFromDeck = async (req, res) => {
    // Remove a Pokemon from the active deck

    //get the id from the request parameters
  

  // Find the Pokemon by ID

    //use findByPk to get the Pokemon and use await
  

    // Check if the Pokemon exists
    
        //if not return status 404
   
    //await the destroy method
 
    // Return a success message
   
   
    // Log the removal action
  
    // Handle errors
   
};


