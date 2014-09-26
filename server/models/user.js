module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true},
    verified: {
      type: DataTypes.BOOLEAN,
      field: "email_verified",
      allowNull: true,
      defaultValue: false }
  },
  {
    timestamps: false,
    tableName: 'users',
    classMethods: {
      associate: function(models) {
        User.hasMany(models.AuthData);
      },
      create: function(cb, email, provider, value) {
        sequelize.transaction(function(t) {
          async.waterfall([
            function(cb){
              User.create({email: email},
                { transaction: t })
                .success(function(user){cb(null, user)});
                .error(function(err){cb(err)});
            },
            function(user, cb){
              User.AuthData.create(
                {
                  user_id: user.id,
                  provider: provider,
                  value: value
                },
                { transaction: t })
                .success(function(auth){cb(null)});
                .error(function(err){cb(err)});
            }
          ],
          function(err){
            if(err){
              t.rollback();
            }else{
              t.commit();
            }
          });
          t.done(cb);
        });
      }
    }
  });
 
  return User;
}