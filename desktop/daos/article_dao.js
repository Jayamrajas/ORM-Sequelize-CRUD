var models = require("../models");
var db = require("../models/index");
var sequelize = models.sequelize;
var Creator = 

module.exports.create_article = function(articledtls,callback) {
    console.log("create book dao");
    var ArticleDtls = articledtls;

    return db.Article.create({
        articlename:ArticleDtls.articlename,
        topic:ArticleDtls.topic,
        authorname:ArticleDtls.authorname,
        creator:{
            bookname:ArticleDtls.bookname,
            publication:ArticleDtls.publication,    
        }
    },{
        include:[ {model: db.Book , as:"creator" } ],
    });


// module.exports.create_article = function(articledtls,callback) {
//     console.log("create article dao");
//     var ArticleDtls = articledtls;
//     db.Article.create({
//         articlename:ArticleDtls.articlename,
//         topic:ArticleDtls.topic,
//         authorname:ArticleDtls.authorname,
//     }).then(function(articledtls){
//         callback(articledtls);
//     })
// }


module.exports.update_article = function(articledtls,callback) {
    var ArticleDtls = articledtls;
    var values = {
        bookname:BookDtls.bookname,
        publication:BookDtls.publication,
    }
    var selector = {
        where:{id: id},
    }
    db.Article.update(values,selector).then(function(articledtls){
        callback(articledtls);
    })
}

module.exports.delete_article = function(articledtls,callback) {
    //var BookDtls = bookdtls;
    //db.book.
}
module.exports.findall_article = function(res) {
    db.Article.findAll({
       
    }).then(article =>{
        res(article);
    })
}

// module.exports.findall_bookandarticle = function(articledtls,callback) {
//     console.log("inside bookandarticle dao");
//     db.Article.find({
//         where:{ id:1 },
//         include: [{
            
//         }]
//     }).then(function() {
//         callback(Articledtls);
//     })
}