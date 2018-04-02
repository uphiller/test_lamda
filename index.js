var jwt = require('jsonwebtoken');
exports.handler = function(event, context,callback) {
  const token = event.headers['Authorization'];


  jwt.verify(token, 'shhhhh', function(err, decoded) {
    if (err) {
      callback(null, {"statusCode": 200, "body": err.message});
    }else{
      callback(null, {"statusCode": 200, "body": token});
    }
  });
}

