var mysql = require("mysql")


function ConnectDB(){
    var connection = mysql.createConnection({
        host:'rm-wz9l3o5q1k6wm799f.mysql.rds.aliyuncs.com',
        user:'fengfan_db',
        password:'FENGFANCKY1-',
        port:'3306',
        database:'myclass'
    });

    this.getData = function(str){
        return str;
    };

    

    this.queryData = function(str,callback){

        var res = '';
        connection.query(str, function(err,results){
            if(err){
                console.log(err);
                res = err;
            }else{
                for( var i=0;i<results.length;i++){
                 res +=results[i].id+" "+results[i].name+" "+results[i].des+"\n";
                }
                console.log(res);
                callback(res);
            }

        });
        
    };
    
}

module.exports = ConnectDB;


