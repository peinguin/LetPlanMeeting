module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('UserCredentials', {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      }
    }
  })
 
  return User
}