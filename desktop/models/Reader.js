'use strict';

module.exports = function(sequelize, DataTypes) {
    var Reader = sequelize.define("Reader", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name: DataTypes.STRING,
        city: DataTypes.STRING
      },{
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    });
    return Reader;
}

