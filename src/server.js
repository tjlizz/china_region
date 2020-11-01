const express = require('express');
const app = express();
const port = 9600;
const path = require('path');
const {readFile} = require('./tool');
app.use(express.static('public'))
app.use('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');//设置方法
    if (req.method == 'OPTIONS') {
      res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
    }
    else {
      next();
    }
  });
app.get('/v1/api/xzhf', async (req, res) => {
    const {level, fid} = req.query;
    let filePath = '';
    console.log(level, 'level');
    filePath = path.resolve(`./data/${level}/${fid}.json`);
    let data = await readFile(filePath)
        .then((data) => data)
        .catch((err) => err);
    res.send(data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
