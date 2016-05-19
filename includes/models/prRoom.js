module.exports = function(sequelize,Sequelize){

return sequelize.define('prroom', {
  message: {
    type: Sequelize.TEXT,
  }
}, {
  freezeTableName: true
});

}
