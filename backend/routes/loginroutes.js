var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Instalati3',
  database: 'licentos'
});
connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected ... nn");
  } else {
    console.log("Error connecting database ... nn");
  }
});


//  LOGIN
exports.login = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  connection.query('SELECT * FROM Utilizator WHERE email = ?', [email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code": 400,
        "failed": "error ocurred"
      })
    } else {
      // console.log('The solution is: ', results);
      if (results.length > 0) {
        if (results[0].password == password) {
          res.send({
            "code": 200,
            "success": "login sucessfull"
          });
        } else {
          res.send({
            "code": 204,
            "success": "Email and password does not match"
          });
        }
      } else {
        res.send({
          "code": 204,
          "success": "Email does not exits"
        });
      }
    }
  });
}
