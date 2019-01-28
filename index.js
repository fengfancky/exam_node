var ConnectDB = require('./db_connect')

connect = new ConnectDB();

console.log(connect.queryData("Select * From class_table",connect.getData));
// console.log(connect.getData());