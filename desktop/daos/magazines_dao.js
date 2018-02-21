var models = require("../models");
var db = require("../models/index");
var sequelize = models.sequelize;

module.exports.create_magazines = function(MagazinesDtls,callback) {
    console.log("create magazines dao");
    var temp = [];
    for(var i=0;i<MagazinesDtls.shops.length;i++){
        var tempobj = { shopname:MagazinesDtls.shops[i].shopname,
            publication:MagazinesDtls.shops[i].publication}

            temp.push(tempobj);
    }
    
    return db.Magazines.create({
        magazinename:MagazinesDtls.magazinename,
        publication:MagazinesDtls.publication,
        Shops:temp
    },{
        include:[ 
            db.Shops
            ],    
        
    }).then(function(magazinesdtls){
        callback(magazinesdtls);
    });
}


module.exports.update_magazines = function(magazinesdtls,callback) {
    var values = {
        magazinename:magazinesdtls.magazinename,
        publication:magazinesdtls.publication,
    }
    var selector = {
        where:{id: magazinesdtls.id},
    }
    db.Magazines.update(values,selector).then(function(magazinesd){
        for(var i=0;i<magazinesdtls.shops.length;i++){
            db.Shops.update(magazinesdtls.shops[i],{where:{id:magazinesdtls.shops[i].id}},function(shops){
            })
        }
    }).then(magazines => {
        callback(magazines);
    })
}

module.exports.delete_magazines = function(magazinesdtls,callback) {
    console.log("inside magazines delete dao",magazinesdtls.id);
    var magId = magazinesdtls.id;
    db.MagazineShops.findAll({
        where:{MagazineId:magazinesdtls.id}
    }).then(function(magazineshops){
        for(var i=0;i<magazineshops.length ; i++){
            db.Shops.destroy({where:{id : magazineshops[i].ShopId}})
        }
    }).then(function(magazineshops){
        db.Magazines.destroy({
            where:{id:magId}
        })
    })
}
module.exports.findall_magazines = function(res) {
    console.log("inside magazines findall dao");
    db.Magazines.findAll({
       include: [{
        model:db.Shops,
       }],
    }).then(magazines => {
        res(magazines);
    })
}
