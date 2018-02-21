var models = require("../models");
var db = require("../models/index");
var sequelize = models.sequelize;



module.exports.create_reader = function(ReaderDtls,callback) {
    console.log("create reader dao");
    console.log("insjjjjj---->",ReaderDtls);
    var temp = [];
    console.log("entering int o create reader--------------",ReaderDtls)
    console.log("entering int o create reader----222----------",ReaderDtls.papers)
    console.log("entering int o create reader----333333----------",ReaderDtls.papers.length)
    for(var i=0;i<ReaderDtls.papers.length;i++){
        var tempobj = { papername:ReaderDtls.papers[i].papername,
            publication:ReaderDtls.papers[i].publication}

            temp.push(tempobj);
    }
    return db.Reader.create({
        name:ReaderDtls.name,
        city:ReaderDtls.city,
        Papers:temp
            
    },{
        include:[ 
            db.Papers,
        ],    
        
    }).then(function(readerdtls){
        callback(readerdtls);
    });
}


module.exports.update_reader = function(readerdtls,callback) {
    var ReaderDtls = readerdtls;
    var values = {
        name:ReaderDtls.name,
        city:ReaderDtls.city,
    }
    var selector = {
        where:{id: ReaderDtls.id},
    }
    db.Reader.update(values,selector).then(function(readerd){
     for(var i=0;i<ReaderDtls.papers.length;i++){
           
         db.Papers.update(ReaderDtls.papers[i],{where:{id : ReaderDtls.papers[i].id}},function(paper){
            console.log("paper details values ----------------",paper)
         })
       }    
     }).then(readerd => {
         callback(readerd);
  })
}
  
module.exports.delete_reader = function(readerdtls,callback) {
    console.log("inside reader delete dao");
    var ReaderDtls = readerdtls;
    db.Reader.destroy({
        where:{id:ReaderDtls.id}
    }).then(reader => {
        callback(reader);
    })
}
module.exports.findall_reader = function(res) {
    console.log("inside reader findall dao");
    db.Reader.findAll({
       include: [{
        model:db.Papers,
       }],
    }).then(reader => {
        res(reader);
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