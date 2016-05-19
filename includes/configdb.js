module.exports = function(Sequelize){

var db = new Sequelize('mysql://root:root@localhost:8889/nodechat');

return db;

}