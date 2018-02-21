

var bookdtls_service = require("../services/bookdtls_service");

//GET ALl Book details
module.exports.get_all_book = function (req, res) {
  console.log("inside book findall controller");
    bookdtls_service.findall_book(function(bookdtl){
      res.status(200)
      res.json(bookdtl);
      
    })
  }
  
//get all book and article details
module.exports.getall_bookandarticle =function (reqm, res) {
  console.log("inside bookandarticle controller");
  bookdtls_service.findall_bookandarticle(function(banda){
    res.status(200);
    res.json(banda);
  })
}

//edit book
module.exports.edit_book = function (req, res) {
  console.log("update book controller");
  var BookDtl = req.body;
  bookdtls_service.update_book(BookDtl, function(bookdtl){
    res.status(201);
    res.json(bookdtl);
  })
}

//create book details
  module.exports.create_book = function (req, res) {
    console.log("create book controller");
    var BookDtl = req.body;
   
    bookdtls_service.create_book(BookDtl, function(bookdtl){
      res.status(201);
      res.json(bookdtl);
    })
  }

  //update book details
  module.exports.update_book = function(req, res) {
      var BookDtl = req.body;

      bookdtls_service.update_book(BookDtl, function(bookdtl){
          res.status(200);
          res.json(bookdtl);
      })
  }


  //delete book details
  module.exports.delete_book = function(req, res) {
    console.log("inside book delete controller");
      var BookDtl = req.body;

      bookdtls_service.delete_book(BookDtl, function(bookdtl){
          res.status(200);
          res.json(bookdtl);
      })
  }