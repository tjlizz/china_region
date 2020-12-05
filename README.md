# 简介

全国行政区域json文件， 包括省，市，区，县，镇，街道

数据持续更新中。。。

# 保存目录

```
data
│  ├─1  
│  ├─2
│  ├─3
│  └─4
│  └─5
```

* 1 省
* 2 市
* 3 区/县
* 4 镇/街道
* 5 邮政编码/电话区号

根据层级结构保存在不同的文件夹中，文件的命名都是上级区域的id。

 比如北京的`id`是110000,那么海淀区所在的文件名称就是`110000.json` 以此类推

 # 启动项目

  下载代码到本机(二选一即可)
  ```shell
  $ git clone https://github.com/lizeze/china_region.git

  $ git clone https://gitee.com/zeze.li/china_region.git
  ```
  安装依赖

  ```shell
   $ cd china_region
   $ npm i 
   $ npm start
  ```
  Get `http://localhost:9600/v1/api/xzhf/fid=100000&level=1`

  |     |   |
|  ----  | ----  |
| level  | 请求的数据类型，和保存目录一致 |
| fid  | 请求数据的父节点 |
# 生成sql文件

``` 
 $ npm run sql     #全部数据生成sql

 $ npm run sql 1   #生成省级sql

 $ npm run sql 2   #生成市级sql

 $ npm run sql 3   #生成县级sql

 $ npm run sql 4   #生成街道sql
 
 $ npm run postcode # 生成邮政编码数据sql

```

修改`sql`字段名称

`./src/tool.js`
 ``` javascript
 let sqlObj = {
    tableName: 'table1',
    id: 'id',
    name: 'name',
    level: 'level',
    parent: 'parent',
};
 ```

修改`postCode`表名称
`./src/tool.js`
 ``` javascript
 let postCodeSqlObj = {
     tableName: 'postCode'
 };

 ```
# 其他语言
 * [java](https://github.com/lizeze/china_region_java_api)
 
 * Ruby (开发中)
 * Python (开发中)
 * C# (开发中)
  
  
  
  
  
  
  
  
  
  
  
  

  

  
  
  

  
  
  
  
  
  
  

  
  
