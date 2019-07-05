'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.ProductsOrders, {foreignKey: 'productID'})
  };
  return Products;
};