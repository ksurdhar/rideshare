var Q = require('q');
var request = require('superagent');

exports.createRide = function(ride, callback){
  debugger;
  request.post('/rides')
  .send(ride)
  .end(function(err, res){
    callback(res.body);
  });
};

exports.getRides = function(callback){
  request.get('/rides')
  .end(function(err, res){
    callback(res.body);
  });
};
