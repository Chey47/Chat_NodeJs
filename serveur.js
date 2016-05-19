// Importation des dependences pour le serveur
var http = require("http");
var md5 = require("md5");
var Sequelize = require('sequelize');

// Démarrage du serveur
httpServer = http.createServer(function(req,res){

});

// Le serveur ecoute sur le port 1337
httpServer.listen(1337);


// Base de données
var db = require('./includes/configdb')(Sequelize);
var user = db.import(__dirname + "/includes/models/utilisateur");
var pbroom = db.import(__dirname + "/includes/models/pbRoom");
var prroom = db.import(__dirname + "/includes/models/prRoom");

// Création automatique des relations entre les tables
pbroom.belongsTo(user);
prroom.belongsTo(user,{as : 'UtilisateurUn'});
prroom.belongsTo(user,{as : 'UtilisateurDeux'});
// Création automatique des tables
db.sync();

/*
prroom.create({message:"Salut",UtilisateurUnId:1,UtilisateurDeuxId:2}).then(function(p){
  console.log(p.id);
})

prroom.findAll({
      where: {
        utilisateurId : {in :[1,2]}
    },
include: [user]
}).then(function(data){

console.log(JSON.stringify(data));

});

prroom.create({}).then(function(p){
  p.addUtilisateurs([1,2]);
});*/



// Importation de socket io
var io = require("socket.io").listen(httpServer);
require('./includes/socketio')(io,md5,user,pbroom,prroom);
