var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "mealcoupon-release-cluster.cluster-ro-cofqettussu1.ap-northeast-2.rds.amazonaws.com",
  user: "root",
  password: "tnavhdlsxmslave",
  database: "mysql",
});
// console.log(connection);
exports.handler = (event, context, callback) => {
  connection.query('SELECT * FROM  mysql.slow_log order by start_time desc limit 1, 10', function (error, results, fields) {
    if (error) {
      connection.destroy();
      throw error;
    } else {
      // connected!
      console.log(results);
      callback(error, results);
      connection.end(function (err) { callback(err, results);});
    }
  });
};
/*var jwt = require('jsonwebtoken');
exports.handler = function(event, context,callback) {
  var token = event.authorizationToken;
  jwt.verify(token, 'shhhhh', function(err, decoded) {
    if (err) {
      callback("Unauthorized");
    }else{
      callback(null, generatePolicy('user', 'Allow', event.methodArn));
    }
  });
}

// Help function to generate an IAM policy
var generatePolicy = function(principalId, effect, resource) {
  var authResponse = {};

  authResponse.principalId = principalId;
  if (effect && resource) {
    var policyDocument = {};
    policyDocument.Version = '2012-10-17';
    policyDocument.Statement = [];
    var statementOne = {};
    statementOne.Action = 'execute-api:Invoke';
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }

  return authResponse;
}*/

