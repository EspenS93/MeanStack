var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var races = require('./routes/races');
var characters = require('./routes/characters');
var characterClasses = require('./routes/classes');

var port = 3000;

var app = express();

//View Engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Paser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/',index);
app.use('',index);
app.use('/dashboard',index);
app.use('/characters',index);
app.use('/races',index);
app.use('/classes',index);
app.use('/characters/detail/*',index);
app.use('/races/detail/*',index);
app.use('/classes/detail/*',index);
app.use('/newClass',index);
app.use('/newCharacter',index);
app.use('/newRace',index);
app.use('/api', races);
app.use('/api', characterClasses);
app.use('/api', characters);
app.listen(port,function(){
    console.log('Server started on port '+port);
});