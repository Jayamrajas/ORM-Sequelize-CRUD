var models = require("../models");
var db = require("../models/index");
var sequelize = models.sequelize;
//var Reader = db.Reader;
var Book = db.Book;

module.exports.create_papers = function(PapersDtls,callback) {
    console.log("create papers dao");
    console.log("insjjjjj---->",PapersDtls);
    return db.Papers.create({
        papername:PapersDtls.name,
        publication:PapersDtls.city,
        Shops:
            [{
             shopname:PapersDtls.Shops.papername,
             publication:PapersDtls.Shops.publication 
            }]
    },{
        include:[ {
            model: db.Shops
            //association:db.Reader.db.Papers,
        }],    
        
    }).then(function(papersdtls){
        callback(papersdtls);
    });
   
    // var ReaderDtls = readerdtls;
    // db.Reader.create({
    //     name:BookDtls.name,
    //     city:BookDtls.city,
    //     db.Book:[{

    //     }]
    // }).then(function(readerdtls){
    //     callback(readerdtls);
    // })
}


module.exports.update_papers = function(papersdtls,callback) {
   
    var values = {
        name:papersdtls.name,
        city:papersdtls.city,
    }
    var selector = {
        where:{id: papersdtls.id},
    }
    db.Papers.update(values,selector).then(function(papersd){
        callback(papersd);
    }).then(papers => {
        res(papers);
    })
}

module.exports.delete_papers = function(papersdtls,callback) {
    console.log("inside papers delete dao");
   
    db.Papers.destroy({
        where:{id:papersdtls.id}
    }).then(papers => {
        callback(papers);
    })
}
module.exports.findall_papers = function(res) {
    console.log("inside papers findall dao");
    db.Papers.findAll({
       include: [{
        model:db.Shops,
       }],
    }).then(papers => {
        res(papers);
    })
}

// module.exports.findall_bookandarticle = function(bookdtls,callback) {
//     console.log("inside bookandarticle dao");
//     db.bookandarticle.find({
//         where:{ id:1 },
//         include: [{
//             model:Article, as :'writers'
//         }]
//     }).then(function() {
//         callback(bookdtls);
//     })
// }