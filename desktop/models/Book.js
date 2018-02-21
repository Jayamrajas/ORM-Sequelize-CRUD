'use strict';

module.exports = function(sequelize, DataTypes) {
    var Book = sequelize.define("Book", {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        bookname: DataTypes.STRING,
        publication: DataTypes.STRING,  
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    });
    return Book;
}