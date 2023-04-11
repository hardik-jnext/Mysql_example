let mysql = require("mysql");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "nodeMysql_db",
});
con.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected!");
  }
});
module.exports = con;  



