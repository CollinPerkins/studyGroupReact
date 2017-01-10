const User = require('../models/user');

exports.getAllUsers = function(req, res, next) {
  User.find({}, function(err, docs) {
    if (!err){
      var filteredUsers = docs.map(function(obj){
          var newObj = {
            email: obj.email,
            name: obj.name,
            guides: obj.guides
          }
         return newObj;
      });
      res.send(filteredUsers);
    } else {throw err;}
  });
}
