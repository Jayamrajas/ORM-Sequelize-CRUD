'use strict';

module.exports = function(sequelize, DataTypes){
    var Article = sequelize.define("Article", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        articlename: DataTypes.STRING,
        topic: DataTypes.STRING,
        authorname: DataTypes.STRING,   
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
      });
      return Article;
}