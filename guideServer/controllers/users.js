const User = require('../models/user');

exports.getAllUsers = function(req, res, next) {
  User.find({}).toArray(function(err, docs) {
    if (!err){      
      res.send(docs);
    } else {throw err;}
  });
}
