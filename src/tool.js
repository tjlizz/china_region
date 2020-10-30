const fs = require('fs');

function readFile(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, function (eror, data) {
			if (!eror) {
				console.log(JSON.parse(data), 'data');
				resolve(JSON.parse(data));
			} else {
				console.log('error');
				reject(JSON.stringify({ reason: 'error', result: '参数错误', error_code: 400 }));
			}
		});
	});
}
module.exports = {
	readFile,
};