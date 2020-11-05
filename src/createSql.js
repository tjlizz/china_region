const path = require('path');
const fs = require('fs');
const { readFile, sqlObj, dirExists } = require('./tool');

let fileDisplay = (filePath, level) => {
	fs.readdir(filePath, async function (err, files) {
		if (err) {
		} else {
			let sqlText = '';
			for (let i = 0; i < files.length; i++) {
				var filedir = path.join(filePath, files[i]);
				let fileContent = await readFile(filedir);
				sqlText += createSqlText(fileContent);
			}
			fs.writeFileSync(`./dist/${level}.sql`, sqlText, { encoding: 'utf8' });
		}
	});
};

let level = process.argv.splice(2);
let main = async () => {
	if (level.length == 0) level = 5;
	await dirExists('./dist');
	let options = {
		1: function () {
			fileDisplay('./data/1', 1);
		},
		2: function () {
			fileDisplay('./data/2', 2);
		},
		3: function () {
			fileDisplay('./data/3', 3);
		},
		4: function () {
			fileDisplay('./data/4', 4);
		},
	};
	if (level == 5) {
		for (let item in options) {
			options[item]();
		}
	} else {
		options[level]();
	}
};
main();

let createSqlText = (array) => {
	let sqlText = '';
	array.forEach((item) => {
		sqlText += `insert into  ${sqlObj.tableName} (${sqlObj.id},${sqlObj.name},${sqlObj.level},${sqlObj.parent}) values ('${item.adcode}','${item.name}','${item.level}','${item.parent}');\n`;
	});
	return sqlText;
};
