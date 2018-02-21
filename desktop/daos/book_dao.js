var models = require("../models");
var db = require("../models/index");

var sequelize = models.sequelize;

module.exports.create_book = function(bookdtls,callback) {
    console.log("create book dao");
    var BookDtls = bookdtls;
    console.log("jhhhhh------>",BookDtls);
    return db.Book.create({
        bookname:BookDtls.bookname,
        publication:BookDtls.publication,
        Article:{
            articlename:BookDtls.Article.articlename,
            topic:BookDtls.Article.topic,
            authorname:BookDtls.Article.authorname,
        }
    },{
        include:[ {model: db.Article } ],
    });

    // db.Book.create({
    //     bookname:BookDtls.bookname,
    //     publication:BookDtls.publication
    // }).then(function(bookdtls){
    //     callback(bookdtls);
    // })
}


module.exports.update_book = function(bookdtls,callback) {
    var values = {
        bookname:bookdtls.bookname,
        publication:bookdtls.publication,
        Article:{
           
        }
    }
    var selector = {
        where:{id: bookdtls.id},
    }
    db.Book.update(values,selector).then(function(bookd){
        callback(bookd);
    }).then(function(bookd){
        console.log("ooooooooooooo-------->",bookd);
          var values = {
            articlename:bookdtls.article.articlename,
            topic:bookdtls.article.topic,
            authorname:bookdtls.article.authorname,
            BookId:bookdtls.article.BookId
          }
          var selector = {
            where:{id: bookdtls.id}
          }
          db.Article.update(values,selector)
    }).then(book => {
        callback(book);
    })
}

module.exports.delete_book = function(bookdtls,callback) {
    console.log("inside book delete dao");
    var BookDtls = bookdtls;
    db.Book.destroy({
        where:{id:BookDtls.id}
    }).then(book => {
        callback(book);
    })
}
module.exports.findall_book = function(res) {
    console.log("inside book findall dao");
    db.Book.findAll({
       include: [{
        model:db.Article,
       }],
    }).then(book => {
        res(book);
    })
}

module.exports.findall_bookandarticle = function(bookdtls,callback) {
    console.log("inside bookandarticle dao");
    db.bookandarticle.find({
        where:{ id:1 },
        include: [{
            model:Article, as :'writers'
        }]
    }).then(function() {
        callback(bookdtls);
    })
}