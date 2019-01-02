// Déclaration des modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Connexion à la base de donnée
mongoose.connect('mongodb://localhost/db').then(() => {
    console.log('Connected to mongoDB')
}).catch(e => {
    console.log('Error while DB connecting');
    console.log(e);
});

// On définit notre objet express nommé app
var app = express();

// Body Parser
var urlencodedParser = bodyParser.urlencoded({
    extended: true
});
app.use(urlencodedParser);
app.use(bodyParser.json());

//Définition des CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

//On définit la route Hello
app.get('/hello',function(req,res){
    res.json("Hello World")
});

//Définition du routeur User
var router = express.Router();
app.use('/user', router);
require(__dirname + '/controllers/userController')(router);

//Définition et mise en place du port d'écoute
var port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));