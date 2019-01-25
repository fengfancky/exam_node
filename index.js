var ConnectDB = require('./db_connect')

connect = new ConnectDB();
var res = connect.queryData("Select * From class_table");
console.log(res);