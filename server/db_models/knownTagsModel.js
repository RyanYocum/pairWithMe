var Sequelize = require('sequelize');
var User = require('./userModel.js');
var Tag = require('./tagModel.js');

var KnownTag = sequelize.define('knowntags', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
});

module.exports = KnownTag;