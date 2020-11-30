const path = require('path');
const {readFile, postCodeSqlObj} = require('./tool');
const fs = require('fs')
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
            fs.writeFileSync(`./dist/${level}.sql`, sqlText, {encoding: 'utf8'});
        }
    });
};

let createSqlText = (array) => {
    let sqlText = '';
    array.forEach((item) => {
        sqlText += `insert into  ${postCodeSqlObj.tableName}  values ('${item.id}', '${item.province}','${item.city}','${item.area}','${item.post_code}','${item.area_code}');\n`;
    });
    return sqlText;
};

let filePath = path.normalize(path.join(__dirname, "../data", "5", "/"));
let main = async () => {

    let data = await readFile(path.join(filePath + "postCode.json"))
    let sqlText = createSqlText(data)
    fs.writeFileSync(`./dist/5.sql`, sqlText, {encoding: 'utf8'});
}
main()
