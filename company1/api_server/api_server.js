var express = require('express');
var path = require('path');
//var logger = require('morgan');
//var cookieParser = require('cookie-parser');
//var bodyParser = require('body-parser');
var app = express();
var fixtures = require('./fixtures');

var http = require('http').createServer(app);
//var io = require('socket.io')(http);

var res_lxd = require('./response/res_lxd');
var api_lxd = require('./request/api_lxd');

app.set('port', process.env.PORT || 19000);
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// app.use(cookieParser());
//监听端口是否启动
http.listen(app.get('port'), function () {
  console.log('server listening on port' + app.get('port'));
});

//io.sockets.on('connection', function (socketIO){
////	//客户端接收数据
////	socketIO.on('fromWebClient',function(){
////		
////	});
////	// 客户端断开连接
////	socketIO.on('disconnect',function(){
////		console.log('DISCONNECTED FROM CLIENT');
////	});
//	// 向客户端发送数据
//	setInterval(function(){
//		socketIO.emit('pushToWebClient',{"userName":"张三"});
//	},1000);
//});
//登录
app.post("/company/userInfo/login",function(req, res){
     var message={
       result:'success',
       data:{
         userName:'张三',
         userPassword:'123456',
         userAge:'1'
       }
     }
     res.send(message);
})
//查询
app.post("/company/userInfo/query", function(req, res) {
  res.send(fixtures.userMessage);
});
//修改
app.post("/company/userInfo/update", function(req, res) {
  res.send(fixtures.updateMessage);
});