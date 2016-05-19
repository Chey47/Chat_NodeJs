module.exports = function(io,md5,dbuser,dbpbroom,dbprroom){


var users=[];
var privateusers=[];

// Attribuer une socket a un utilisateur en cas de connexion
io.sockets.on("connection",function(socket){

	var utilisateur=false;

	// Envoyer au nouveau visiteur la liste des utilisateurs en ligne
	socket.on("visit",function(){
		socket.emit("getlist",users);
	});

	// Authentification
	socket.on("login",function(user){

		utilisateur=user;
		utilisateur.avatar="https://gravatar.com/avatar/"+md5(utilisateur.mail)+"?s=50";
		utilisateur.time=0;


		dbuser.findAll({limit: 1,
  			where: {
    			mail: utilisateur.mail,
    			mdp:md5(utilisateur.mdp)

  		}
		}).then(function(data){

			if(data.length==0){

				socket.emit("errauth");

			}
			else{
				utilisateur.id=data[0].id;
				utilisateur.pseudo=data[0].pseudo;
				users.push(utilisateur);
				socket.emit("logged",utilisateur);
				io.sockets.emit("newusr",users);
			}
				});

		});


	// Inscription
	socket.on("inscription",function(user){

		utilisateur=user;
		utilisateur.avatar="https://gravatar.com/avatar/"+md5(utilisateur.mail)+"?s=50";
		utilisateur.time=0;

		dbuser.create({pseudo: utilisateur.pseudo, mail: utilisateur.mail, mdp: md5(utilisateur.mdp)},{isNewRecord:true}).then(function(data){


		utilisateur.id=data.id;

		users.push(utilisateur);
		socket.emit("logged",utilisateur);
		io.sockets.emit("newusr",users);


		}).catch(function(err){
    			socket.emit("errinsc");
		});


	});

	// Traitement d'un message publique
	socket.on("sendmsgtoall",function(user,msg,date){
		user.msg=msg;
		user.date=date;
		dbpbroom.create({message: msg, utilisateurId: user.id}).then(function(){
		io.sockets.emit("newpublicmsg",user);
		});
	});


	// Traitement d'un message privé
	socket.on("sendmsgtoone",function(user,anotheruser,msg,date){
			user.msg=msg;
			user.date=date;
			user.other=anotheruser.id;
			dbprroom.create({message: msg, UtilisateurUnId:user.id,UtilisateurDeuxId:anotheruser.id}).then(function(){
					io.sockets.emit("newprivatemsg",user);
			});
	});

	// Detruire la socket de l'utilisateur qui se deconnecte
	socket.on("disconnect",function(){

		if(!utilisateur){
			return false;
		}

		for(var i=0;i<users.length;i++){
			if(users[i].id==utilisateur.id){
				users.splice(users.indexOf(users[i]),1);
			}
		}

		io.sockets.emit("updatedusers",users);

	})

});


// Gerer le temps de connexion des utilisateurs en cours
setInterval(function() {

	for(var i=0;i<users.length;i++){

		users[i].time+=1;
		io.sockets.emit("updatedusers",users);

	}

},60*1000);


}
