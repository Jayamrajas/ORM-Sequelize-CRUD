'use strict';

module.exports = function(sequelize, DataTypes) {
    var Papers = sequelize.define("Papers", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        papername: DataTypes.STRING,
        publication: DataTypes.STRING,  
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    });
    return Papers;
}