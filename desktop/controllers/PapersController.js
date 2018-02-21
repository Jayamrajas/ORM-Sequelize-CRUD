

var papersdtls_service = require("../services/papersdtls_service");

//GET ALl Reader details
module.exports.get_all_Papers = function (req, res) {
  console.log("inside reader findall controller");
  papersdtls_service.findall_papers(function(papersdtl){
      res.status(200)
      res.json(papersdtl);
      
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
module.exports.edit_Papers = function (req, res) {
  console.log("update reader controller");
  var PapersDtl = req.body;
  papersdtls_service.update_papers(PapersDtl, function(papersdtl){
    res.status(201);
    res.json(papersdtl);
  })
}

//create reader details
  module.exports.create_Papers = function (req, res) {
    console.log("create reader controller");
    var PapersDtl = req.body;
   
    papersdtls_service.create_papers(PapersDtl, function(papersdtl){
      res.status(201);
      res.json(papersdtl);
    })
  }

  //update reader details
  module.exports.update_papers = function(req, res) {
      var PapersDtl = req.body;
      console.log("inside reader update controller");
      papersdtls_service.update_papers(PapersDtl, function(papersdtl){
          res.status(200);
          res.json(papersdtl);
      })
  }


  //delete reader details
  module.exports.delete_Papers = function(req, res) {
    console.log("inside reader delete controller");
      var PapersDtl = req.body;

      papersdtls_service.delete_papers(PapersDtl, function(papersdtl){
          res.status(200);
          res.json(papersdtl);
      })
  }