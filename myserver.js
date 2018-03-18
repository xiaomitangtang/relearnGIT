/**
 * Created by hp on 2018/3/17.
 */
var express=require('express');
var formidable=require('formidable');
const  app =express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token,aaa");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
  else  next();
});
app.get('/index',function (req,res) {
  console.log(req.query);
  res.send('你发送的请求参数是：'+JSON.stringify(req.query));
});
app.post('/index',function (req,res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    console.log(fields);
    res.send('收到你的post请求了,你传过来的数据是'+JSON.stringify(fields))
  });
})
app.listen(9000,function (err) {
  if(err){
    console.log('出错了');
  }
  console.log('成功监听9000');
})
