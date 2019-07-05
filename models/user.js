'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {foreignKey: 'uid'});
  };

  // sequelize.sync()
  // .then(() => {
  //   User.create({email:'leticiademichelli@gmail.com'})
  // })

  return User;
};