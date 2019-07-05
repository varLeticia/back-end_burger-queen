'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrders = sequelize.define('ProductsOrders', {
    orderID: DataTypes.INTEGER,
    productID: DataTypes.INTEGER
  }, {});
  ProductsOrders.associate = function(models) {
    ProductsOrders.belongsTo(models.Orders, {foreignKey: 'orderID'});
    ProductsOrders.belongsTo(models.Products, {foreignKey: 'productID'});
  };
  return ProductsOrders;
};