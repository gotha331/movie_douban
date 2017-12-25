//socket+http协议=>net=>http=>express=>request

// 1、引入express
const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const request=require('request')
const port = process.env.PORT || 3004
// 2、执行一个方法，本质就是new 了一个构造函数
const app = express()

//建立静态资源文件夹
app.use(express.static(__dirname + '/public'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// 允许访问api的时候cors跨域
app.use((req,res,next)=>{
    // 增加了cors跨域的请求头
    res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
next();
})

// 3、定义了一堆中间件

//定义getMovieListData接口
app.get('/getMovieListData',function (req,res,next) {
    console.log('请求了getMovieListData方法')

    var message=JSON.parse(req.query.message)
    console.log(message)

    var url=`https://api.douban.com/v2/movie/${message.movieType}?start=${message.start}&count=${message.count}`
    // ?start=6&count=10
    request(url,function (error,response,body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(response.body))
        }
        else{
            res.send({errMessage:error})
        }
    })
})

//定义getMovieDetailData接口
app.get('/getMovieDetailData',function (req,res,next) {
    console.log('请求了getMovieDetailData方法')

    var id=req.query.message

    var url=`https://api.douban.com/v2/movie/subject/${id}`
    request(url,function (error,response,body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(response.body))
        }
        else{
            res.send({errMessage:error})
        }
    })
})

//电影查询方法
//定义searchMovieList接口
app.get('/searchMovieList',function (req,res,next){
    console.log('请求了searchMovieList方法')

    var message=JSON.parse(req.query.message)
    console.log(message);

    var keyWord = encodeURI(message.keyWord)

    var url=`https://api.douban.com/v2/movie/search?q=${keyWord}&start=${message.start}&count=${message.count}`
    request(url,function (error,response,body) {
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(response.body))
        }
        else{
            res.send({errMessage:error})
        }
    })
})


//接收反馈表单数据接口
app.post('/sendFeedBack',function(req,res,next){
    console.log('请求了sendFeedBack方法')

    var message=JSON.parse(req.body.message)
    console.log(message)
    res.send({status:'OK'})
})

//实现跨标签访问
app.get('*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})



// 4、启动服务器
const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port)
});
