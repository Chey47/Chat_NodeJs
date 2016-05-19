'use strict';

App.controller('UsersController', ['$scope', function($scope) {

var socket = io.connect("http://localhost:1337");

$scope.user={};

$scope.users=[];

$scope.privateusers=[];

$scope.showchatform=true;

$scope.chatcont="mainappcont row opacityless";

$scope.showerrinsc=false;

$scope.errinsc="";

$scope.showerrauth=false;

$scope.errauth="";

$scope.msg="";

$scope.publicmsgs=[];

$scope.privatemsgs=[];

$scope.mode=null;

socket.emit("visit");

$scope.auth=function(){

	if(angular.isUndefined($scope.user.mail) || angular.isUndefined($scope.user.mdp))
	{

		$scope.showerrauth=true;
		$scope.errauth="Veuillez remplir tous les champs";

	}
	else
	{

			socket.emit("login",{
			mail:$scope.user.mail,
			mdp:$scope.user.mdp
						});

	}

};

$scope.inscr=function(){

	if(angular.isUndefined($scope.user.mail) || angular.isUndefined($scope.user.mdp) || angular.isUndefined($scope.user.pseudo) )
	{
			$scope.showerrinsc=true;
			$scope.errinsc="Veuillez remplir tous les champs";

	}
	else
	{

			socket.emit("inscription",{
			pseudo:$scope.user.pseudo,
			mail:$scope.user.mail,
			mdp:$scope.user.mdp
						});
	}

};

$scope.envoyermsg=function(){

		socket.emit("sendmsgtoall",$scope.user,$scope.msg,new Date());

		$scope.msg="";

};


$scope.envoyerprivatemsg=function(user){

		socket.emit("sendmsgtoone",$scope.user,user,$scope.msg,new Date());

		$scope.msg="";

};

socket.on("newusr",function(users){
$scope.$apply(function(){
		$scope.users=[];
		});

for(var k=0;k<users.length;k++){
	if(users[k].id!=$scope.user.id){
		$scope.$apply(function(){
		$scope.users.push(users[k]);
		});
	}
}

});

socket.on("newpublicmsg",function(publicmsg){
	$scope.$apply(function(){
		$scope.publicmsgs.push(publicmsg);
		});
});

socket.on("newprivatemsg",function(privatemsg){
		if( ($scope.user.id==privatemsg.other) || ($scope.user.id==privatemsg.id)){
					var found=false;

					for(var i=0;i<$scope.privateusers.length;i++){
						if($scope.privateusers[i].id==privatemsg.id){
							found=true;
						}
					}

					if(found==false){
						if(privatemsg.id!=$scope.user.id){
							$scope.addToPrivate(privatemsg);
						}
					}

					$scope.$apply(function(){
							$scope.privatemsgs.push(privatemsg);
					});
		}
});

socket.on("logged",function(user){
	$scope.$apply(function(){
	$scope.showchatform=false;
	$scope.chatcont="mainappcont row fade";
	$scope.user=user;
	});
});

socket.on("errinsc",function(){
	$scope.$apply(function(){
	$scope.showerrinsc=true;
	$scope.errinsc="Ce pseudo ou email est déjà pris";
	});
});

socket.on("errauth",function(){
	$scope.$apply(function(){
	$scope.showerrauth=true;
	$scope.errauth="Coordonées invalides";
	});
});


socket.on("getlist",function(users){
	$scope.$apply(function(){
	$scope.users=users;
	});
});

socket.on("updatedusers",function(users){
$scope.$apply(function(){
		$scope.users=[];
		});

for(var k=0;k<users.length;k++){

	if(users[k].id!=$scope.user.id){
		$scope.$apply(function(){
		$scope.users.push(users[k]);
		});
	}
}
});

$scope.nullifymode=function(){
	$scope.mode=null;
}

$scope.setmode=function(u){
	$scope.mode=u;
}

$scope.addToPrivate = function(user){

if($scope.privateusers.length>0){
	var found=false;
	var j=0;
	for(var i=0;i<$scope.privateusers.length;i++){
		if($scope.privateusers[i].id==user.id){
			found=true;
			j=i;
		}
	}

	if(found==true){

		$scope.privateusers[j]=user;

	}else{
		$scope.privateusers.push(user);
	}

}else{
	$scope.privateusers.push(user);
}

};



$scope.byids = function(id,idd) {
    return function(user) {
        return (user.other == id && user.id==idd) || (user.other==idd && user.id==id);
    }
}


}]);
