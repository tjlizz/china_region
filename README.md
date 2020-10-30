# 简介

全国行政区域json文件， 包括省，市，区，县，镇，街道

# 保存目录

```
data
│  ├─1  
│  ├─2
│  ├─3
│  └─4
```

* 1 省
* 2 市
* 3 区/县
* 4 镇/街道

根据层级结构保存在不同的文件夹中，文件的命名都是上级区域的id。

 比如北京的`id`是110000,那么海淀区所在的文件名称就是`110000.json` 以此类推

 # 启动项目

  下载代码到本机
  ```shell
  $ git clone https://github.com/lizeze/china_region.git
  ```
  安装依赖

  ```shell
   $ cd china_region
   $ npm i 
   $ npm start
  ```
 打开浏览器访问`http://localhost:96/`