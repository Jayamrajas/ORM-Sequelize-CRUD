

var articledtls_service = require("../services/articledtls_service");

//GET ALl Article details
module.exports.get_all_article = function (req, res) {
    
  articledtls_service.findall_article(function(articledtl){
      res.status(200)
      res.json(articledtl);
      
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


//create article details
  module.exports.create_article = function (req, res) {
    console.log("create article controller");
    var ArticleDtl = req.body;
   
    articledtls_service.create_article(ArticleDtl, function(articledtl){
      res.status(201);
      res.json(articledtl);
    })
  }

  //update article details
  module.exports.update_article = function(req, res) {
      var ArticleDtl = req.body;

      articledtls_service.update_article(ArticleDtl, function(articledtl){
          res.status(200);
          res.json(articledtl);
      })
  }


  //delete book details
  module.exports.delete_book = function(req, res) {
      var ArticleDtl = req.body;

      articledtls_service.delete_article(ArticleDtl, function(articledtl){
          res.status(200);
          res.json(articledtl);
      })
  }