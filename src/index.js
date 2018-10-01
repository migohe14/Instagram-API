const express = require('express');
const morgan = require('morgan');
const engine = require('ejs-mate');
const path = require('path');

const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));


//routes

//static files

//server
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'));
})