module.exports = function(sequelize, DataTypes) {
  var AuthData = sequelize.define('AuthData', {
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false},
    provider: {
      type:   DataTypes.ENUM,
      values: ['twitter', 'facebook', 'google', 'password'],
      allowNull: false },
    value: {
      type: DataTypes.STRING,
      allowNull: false }
  },
  {
    timestamps: false,
    tableName: 'auth_data',
    classMethods: {
      associate: function(models) {
        AuthData.belongsTo(models.User);
      }
    }
  });
 
  return AuthData;
}