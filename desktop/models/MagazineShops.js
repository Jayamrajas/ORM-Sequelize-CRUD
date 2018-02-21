'use strict';

module.exports = function(sequelize, DataTypes) {
    var MagazineShops = sequelize.define("MagazineShops", {
        
        MagazineId: {
            type : DataTypes.INTEGER,
            foriegnKey : true
        },
        ShopId:{
            type : DataTypes.INTEGER,
            foriegnKey : true
        },
        
      },{
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        freezeTableName:true
    });
    return MagazineShops;
}