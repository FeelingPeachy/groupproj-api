const sequelize = require('./utils/connectToDB');


const express = require('express');
const app = express();

require('dotenv').config();
const port = 3000;

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


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
