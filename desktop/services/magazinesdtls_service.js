var dao = require("../daos/magazines_dao");



//get all magazines details
module.exports.findall_magazines = function(magazinesdtls,callback) {
    console.log("inside magazines findall service");
  dao.findall_magazines(magazinesdtls,function (magazinesd){
    var id = magazinesdtls.id;
    magazinesdtls.id = id;
    callback(magazinesd)
  });
}


//create magazines details 
module.exports.create_magazines = function(magazinesdtls,callback) {
    console.log("create magazines service");
  dao.create_magazines(magazinesdtls,function (magazinesd){
    var id = magazinesdtls.id;
    magazinesdtls.id = id;
    console.log("after create  data in services----->>>>",magazinesdtls)
    callback(magazinesd);
  });
}

//update magazines details
module.exports.update_magazines = function(magazinesdtls,callback) {
    dao.update_magazines(magazinesdtls,function (magazinesd){
        var id = magazinesdtls.id;
        magazinesdtls.id = id;
        console.log("update service----",magazinesdtls)
        callback(magazinesd);
    })
}

//delete magazines details
module.exports.delete_magazines = function(magazinesdtls,callback) {
    console.log("inside magazines delete service");
    dao.delete_magazines(magazinesdtls,function(magazinesd){
        var id = magazinesdtls.id;
        magazinesdtls.id = id;
        callback(magazinesd);
    })
}


