const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Calls route files to shorten API routes
app.use(routes);

// calls connection file sets port to listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now connected to port ${PORT}!`));
});