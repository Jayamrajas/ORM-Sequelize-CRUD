var dao = require("../daos/book_dao");



//get all book details
module.exports.findall_book = function(bookdtls,callback) {
    console.log("inside book findall service");
  dao.findall_book(bookdtls,function (bookd){
    var id = bookdtls.id;
    bookdtls.id = id;
    callback(bookd)
  });
}

module.exports.findall_bookandarticle = function(bookdtls,callback) {
    console.log("inside bookandarticle service");
    dao.findall_bookandarticle(bookdtls,function (bookd){
        callback(bookd);
    })
}

//create book details 
module.exports.create_book = function(bookdtls,callback) {
    console.log("create book service");
  dao.create_book(bookdtls,function (bookd){
    var id = bookdtls.id;
    bookdtls.id = id;
    console.log("after create  data in services----->>>>",bookdtls)
    callback(bookd);
  });
}

//update book details
module.exports.update_book = function(bookdtls,callback) {
    dao.update_book(bookdtls,function (bookd){
        var id = bookdtls.id;
        bookdtls.id = id;
        console.log("update service----",bookdtls)
        callback(bookd);
    })
}

//delete book details
module.exports.delete_book = function(bookdtls,callback) {
    console.log("inside book delete service");
    dao.delete_book(bookdtls,function(bookd){
        var id = bookdtls.id;
        bookdtls.id = id;
        callback(bookd);
    })
}


