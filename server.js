const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const res = require('express/lib/response');

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Landing Page Rendering Path
app.get('/landing', (req, res) => res.render('start-building', { layout: 'landing'}));
app.get('/main', (req, res) => res.render('start-building', { layout: 'main'}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Calls route files to shorten API routes
app.use(routes);

// calls connection file sets port to listening
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Now connected to port ${PORT}!`));
});