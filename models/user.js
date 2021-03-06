'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Users.hasMany(models.emails)
        Users.belongsTo(models.api_keys)
        Users.belongsTo(models.plans)
      }
    }
  });

  return Users;
};