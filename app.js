const sequelize = require('./utils/connectToDB');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const express = require('express');
const app = express();
const allPokemonRoutes = require('./routes/routes');

require('dotenv').config();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GroupProj API',
      version: '1.0.0',
      description: 'API documentation for GroupProj',
    },
  },
  apis: ['./routes/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

//middlewares
app.use(express.json());
app.use('/', allPokemonRoutes);


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
