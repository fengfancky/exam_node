var ConnectDB = require('./db_connect')

connect = new ConnectDB();
connect.queryData("Select * From class_table");