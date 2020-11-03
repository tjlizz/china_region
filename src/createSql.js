const path = require('path');
const fs = require('fs');
const { readFile } = require('./tool');
let filePath = path.relative('./data/1');
readFile(filePath).then((data) => {
	console.log(data);
});

function fileDisplay(filePath) {
	fs.readdir(filePath, function (err, files) {
		if (err) {
		} else {
			//遍历读取到的文件列表
			files.forEach(function (filename) {
				//获取当前文件的绝对路径
				var filedir = path.join(filePath, filename);
				//根据文件路径获取文件信息，返回一个fs.Stats对象
				fs.stat(filedir, function (eror, stats) {
					if (eror) {
						console.warn('获取文件stats失败');
					} else {
						var isFile = stats.isFile(); //是文件
						var isDir = stats.isDirectory(); //是文件夹
						if (isFile && filedir.indexOf('json') > -1) {
							fs.readFile(filedir, function (err, data) {
								if (err) {
									return console.error(err);
								}

								let result = [];
								for (let index = 0; index < data.length; index++) {
									const element = data[index];
									result.push({
										adcode: element.id,
										name: element.name,
										level: 'street',
										parent: element.fid,
									});
									fs.writeFile(`./data/ali/6/${data[0].fid}.json`, JSON.stringify(result), function (
										err
									) {});
								}
							});
						}
						if (isDir) {
							fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
						}
					}
				});
			});
		}
	});
}
