

var magazinesdtls_service = require("../services/magazinesdtls_service");

//GET ALl Magazines details
module.exports.get_all_Magazines = function (req, res) {
  console.log("inside magazines findall controller");
  magazinesdtls_service.findall_magazines(function(magazinesdtl){
      res.status(200)
      res.json(magazinesdtl);
      
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

//edit Magazines
module.exports.edit_Magazines = function (req, res) {
  console.log("update magazines controller");
  var MagazinesDtl = req.body;
  magazinesdtls_service.update_magazines(MagazinesDtl, function(magazinesdtl){
    res.status(200);
    res.json(magazinesdtl);
  })
}

//create magazines details
  module.exports.create_Magazines = function (req, res) {
    console.log("create magazines controller");
    var MagazinesDtl = req.body;
   
    magazinesdtls_service.create_magazines(MagazinesDtl, function(magazinesdtl){
      res.status(201);
      res.json(magazinesdtl);
    })
  }

  //update Magazines details
  module.exports.update_Magazines = function(req, res) {
      var MagazinesDtl = req.body;
      console.log("inside magazines update controller");
      magazinesdtls_service.update_magazines(MagazinesDtl, function(magazinesdtl){
          res.status(200);
          res.json(magazinesdtl);
      })
  }


  //delete Magazines details
  module.exports.delete_Magazines = function(req, res) {
    console.log("inside magazines delete controller");
      var MagazinesDtl = req.body;
     
      magazinesdtls_service.delete_magazines(MagazinesDtl, function(magazinesdtl){
          res.status(200);
          res.json(magazinesdtl);
      })
  }