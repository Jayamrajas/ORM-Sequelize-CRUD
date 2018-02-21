var dao = require("../daos/reader_dao");



//get all book details
module.exports.findall_reader = function(readerdtls,callback) {
    console.log("inside reader findall service");
  dao.findall_reader(readerdtls,function (readerd){
    var id = readerdtls.id;
    readerdtls.id = id;
    callback(readerd)
  });
}

// module.exports.findall_bookandarticle = function(bookdtls,callback) {
//     console.log("inside bookandarticle service");
//     dao.findall_bookandarticle(bookdtls,function (bookd){
//         callback(bookd);
//     })
// }

//create reader details 
module.exports.create_reader = function(readerdtls,callback) {
    console.log("create reader service");
  dao.create_reader(readerdtls,function (readerd){
    var id = readerdtls.id;
    readerdtls.id = id;
    console.log("after create  data in services----->>>>",readerdtls)
    callback(readerd);
  });
}

//update book details
module.exports.update_reader = function(readerdtls,callback) {
    dao.update_reader(readerdtls,function (readerd){
        var id = readerdtls.id;
        readerdtls.id = id;
        console.log("update service----",readerdtls)
        callback(readerd);
    })
}

//delete book details
module.exports.delete_reader = function(readerdtls,callback) {
    console.log("inside reader delete service");
    dao.delete_reader(readerdtls,function(readerd){
        var id = readerdtls.id;
        readerdtls.id = id;
        callback(readerd);
    })
}


