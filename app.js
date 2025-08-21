const express = require('express');
const app = express();
const allPokemonRoutes = require('./routes/routes');

require('dotenv').config();
const port = 3000;

//middlewares
app.use(express.json());
app.use('/', allPokemonRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
