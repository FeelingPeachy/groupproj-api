require('dotenv').config();


//Access the base url for the api through 
// process.env.API_BASE_URL which is: https://pokeapi.co/api/v2


// Get a Pokemon by name
function getPokemonByName = async (req, res) => {

    

    // Get the Pokemon name from the request parameters
 
    // Find the Pokemon by name using await and findone function
   
    // Check if the Pokemon exists

    // if it does not exist return status 404
   
    //return the pokemon 

    //catch the error when fetching the pokemon
 
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


