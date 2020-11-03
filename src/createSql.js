const path = require('path');
const fs = require('fs');
const { readFile, sqlObj } = require('./tool');
fileDisplay('./data/1');

fs.stat(path, (err, stats) => {
	if (err) {
		resolve(false);
	} else {
		resolve(stats);
	}
});

function fileDisplay(filePath, level) {
	console.log(filePath, 'filePath');
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
						if (isFile) {
							readFile(filedir).then((data) => {
								const sqlText = createSqlText(data);
								fs.writeFile(`./dist/${level}.sql`, sqlText, function (err) {});
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

let createSqlText = (array) => {
	let sqlText = '';
	array.forEach((item) => {
		sqlText += `insert into  ${sqlObj.tableName} (${sqlObj.id},${sqlObj.name},${sqlObj.level},${sqlObj.parent}) value ('${item.adcode}','${item.name}','${item.level}','${item.parent}');\n`;
	});
	return sqlText;
};
