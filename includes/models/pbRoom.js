module.exports = function(sequelize,Sequelize){

return sequelize.define('pbroom', {
  message: {
    type: Sequelize.TEXT,
  }
}, {	
  freezeTableName: true 
});

}