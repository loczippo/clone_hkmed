const express = require('express');
const app = express();
const port = 3000;
const route = require('./routers/route.js');
const handlebars  = require('express-handlebars');
const path = require('path');


//define folder is public
app.use(express.static(path.join(__dirname, 'public')));

//define views
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

//define route
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})