module.exports = function(sequelize,Sequelize){

return sequelize.define('utilisateur', {
  pseudo: {
    type: Sequelize.STRING,
    unique: true
  },
  mail: {
    type: Sequelize.STRING,
    unique: true
  },
  mdp: {
    type: Sequelize.STRING
  }
}, {	
  freezeTableName: true 
});

}