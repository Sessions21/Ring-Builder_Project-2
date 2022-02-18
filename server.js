const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
const res = require('express/lib/response');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));

// Calls route files to shorten API routes
app.use(require('./routes/'));
// Page Rendering Paths


// calls connection module and sets port to listening
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now connected to port ${PORT}!`));
});