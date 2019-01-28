var express = require('express')
var app = express();
var querystring = require('querystring')

var ConnectDB = require('./db_connect')
connect = new ConnectDB();


var server = app.listen(3000,function(){
    var host = server.address().address
    var port = server.address().port
   
    console.log("地址:http://%s:%s", host, port) 
});

app.get('/myclass/table_name',function(req,resp){
    
    var urlstr =req.url; 

    if(urlstr.indexOf('?') != -1){
        var arr = urlstr.split('?');
        var params_get = arr[1];
        var json = querystring.parse(params_get);
        console.log(json);
        // connect.queryData("Select * From class_table where id="+json.id,function(str){
        //     console.log(str);
        //     resp.send('>> Get \n'+str);
        // });
        
    }
    
});

app.post('/myclass/table_name',function(req,resp){
    resp.send('Hello World >> Post 111111');
})