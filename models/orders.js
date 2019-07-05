'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function(models) {
      Orders.belongsTo(models.User, {foreignKey: 'uid'});
      Orders.hasMany(models.ProductsOrders, {foreignKey: 'orderID'});  
  };
  return Orders;
};