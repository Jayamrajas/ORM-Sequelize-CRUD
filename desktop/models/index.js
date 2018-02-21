'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var config    = require('../config/config.json').database;
var db        = {};
var sequelize = new Sequelize(config.name, config.username, config.password, config );


fs
.readdirSync(__dirname)
.filter(function(file) {
  return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
})
.forEach(function(file) {
  var model = sequelize['import'](path.join(__dirname, file));
  db[model.name] = model;
});

Object.keys(db).forEach(function(modelName) {
if (db[modelName].associate) {
  db[modelName].associate(db);
}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


//relations

db.Reader.hasMany(db.Papers,{onDelete: 'cascade'});
db.Papers.belongsTo(db.Reader);

db.Magazines.belongsToMany(db.Shops,{through:'MagazineShops',foriegnKey:'ShopId',onDelete: 'cascade'});
db.Shops.belongsToMany(db.Magazines,{through:'MagazineShops',sourceKey:'MagazineId',onDelete: 'cascade'});

db.Book.hasOne(db.Article, {foriegnKey:'BookId',onDelete: 'cascade'});
db.Article.belongsTo(db.Book,{onDelete:'cascade'});

module.exports = db;

