var dao = require("../daos/article_dao");



//get all book details
module.exports.findall_article = function(articledtls,callback) {
  dao.findall_article(articledtls,function (articled){
    var id = articledtls.id;
    articledtls.id = id;
    //callback(articled);
  });
}

// module.exports.findall_bookandarticle = function(bookdtls,callback) {
//     console.log("inside bookandarticle service");
//     dao.findall_bookandarticle(bookdtls,function (bookd){
//         callback(bookd);
//     })
// }

//create book details 
module.exports.create_article = function(articledtls,callback) {
    console.log("create book service");
  dao.create_article(articledtls,function (articled){
    var id = articledtls.id;
    articledtls.id = id;
    console.log("after create member data in services----->>>>",articledtls)
    callback(articled);
  });
}

//update book details
module.exports.update_article = function(articledtls,callback) {
    dao.update_article(articledtls,function (articled){
        var id = articledtls.id;
        articledtls.id = id;
        console.log("update service----",articledtls)
        callback(articled);
    })
}

//delete book details
module.exports.delete_article = function(articledtls,callback) {
    dao.delete_article(articledtls,function(articled){
        var id = articledtls.id;
        articledtls.id = id;
        callback(articled);
    })
}

