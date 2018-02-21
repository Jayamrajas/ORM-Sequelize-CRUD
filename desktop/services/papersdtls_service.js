var dao = require("../daos/papers_dao");



//get all book details
module.exports.findall_papers = function(papersdtls,callback) {
    console.log("inside reader findall service");
  dao.findall_papers(papersdtls,function (papersd){
    var id = papersdtls.id;
    papersdtls.id = id;
    callback(papersd)
  });
}

// module.exports.findall_bookandarticle = function(bookdtls,callback) {
//     console.log("inside bookandarticle service");
//     dao.findall_bookandarticle(bookdtls,function (bookd){
//         callback(bookd);
//     })
// }

//create reader details 
module.exports.create_papers = function(papersdtls,callback) {
    console.log("create reader service");
  dao.create_papers(papersdtls,function (papersd){
    var id = papersdtls.id;
    papersdtls.id = id;
    console.log("after create  data in services----->>>>",papersdtls)
    callback(papersd);
  });
}

//update book details
module.exports.update_papers = function(papersdtls,callback) {
    dao.update_papers(papersdtls,function (papersd){
        var id = papersdtls.id;
        papersdtls.id = id;
        console.log("update service----",readerdtls)
        callback(papersd);
    })
}

//delete book details
module.exports.delete_papers = function(papersdtls,callback) {
    console.log("inside reader delete service");
    dao.delete_papers(papersdtls,function(papersd){
        var id = papersdtls.id;
        papersdtls.id = id;
        callback(papersd);
    })
}


