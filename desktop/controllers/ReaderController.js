

var readerdtls_service = require("../services/readerdtls_service");

//GET ALl Reader details
module.exports.get_all_reader = function (req, res) {
  console.log("inside reader findall controller");
    readerdtls_service.findall_reader(function(readerdtl){
      res.status(200)
      res.json(readerdtl);
      
    })
  }
  
//get all book and article details
// module.exports.getall_bookandarticle =function (reqm, res) {
//   console.log("inside bookandarticle controller");
//   bookdtls_service.findall_bookandarticle(function(banda){
//     res.status(200);
//     res.json(banda);
//   })
// }

//edit reader
module.exports.edit_reader = function (req, res) {
  console.log("update reader controller");
  var ReaderDtl = req.body;
  readerdtls_service.update_reader(ReaderDtl, function(readerdtl){
    res.status(200);
    res.json(readerdtl);
  })
}

//create reader details
  module.exports.create_reader = function (req, res) {
    console.log("create reader controller");
    var ReaderDtl = req.body;
   
    readerdtls_service.create_reader(ReaderDtl, function(readerdtl){
      res.status(201);
      res.json(readerdtl);
    })
  }

  //update reader details
  module.exports.update_reader = function(req, res) {
      var ReaderDtl = req.body;
      console.log("inside reader update controller");
      readerdtls_service.update_book(ReaderDtl, function(readerdtl){
          res.status(200);
          res.json(readerdtl);
      })
  }


  //delete reader details
  module.exports.delete_reader = function(req, res) {
    console.log("inside reader delete controller");
      var ReaderDtl = req.body;

      readerdtls_service.delete_reader(ReaderDtl, function(readerdtl){
          res.status(200);
          res.json(readerdtl);
      })
  }