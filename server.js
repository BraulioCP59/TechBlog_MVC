//Definitions
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
//const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//app set up
const app = express();
const PORT = process.env.PORT || 3001;

//Set up Handlebars engine and include custom helpers
const hbs = exphbs.create(/*{helpers}*/);

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

//setting what template engine express should use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

//Sync Db connection with Controller/API layer
sequelize.sync({force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
})
