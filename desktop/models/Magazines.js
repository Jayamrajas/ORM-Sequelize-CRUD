'use strict';

module.exports = function(sequelize, DataTypes) {
    var Magazines = sequelize.define("Magazines", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        magazinename: DataTypes.STRING,
        publication: DataTypes.STRING,  
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    });
    return Magazines;
}