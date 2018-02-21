'use strict';

module.exports = function(sequelize, DataTypes) {
    var Shops = sequelize.define("Shops", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        shopname: DataTypes.STRING,
        publication: DataTypes.STRING,  
    
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    },);
    return Shops;
}