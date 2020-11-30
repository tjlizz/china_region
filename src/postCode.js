const path = require('path');
const {readFile, postCodeSqlObj} = require('./tool');
const fs = require('fs')

let filePath = path.normalize(path.join(__dirname, "../data", "5", "/"));
let main = async () => {

    let data = await readFile(path.join(filePath + "postCode.json"))
    let sqlText = createSqlText(data)
    fs.writeFileSync(`./dist/5.sql`, sqlText, {encoding: 'utf8'});
}
let createSqlText = (array) => {
    let sqlText = '';
    array.forEach((item) => {
        sqlText += `insert into  ${postCodeSqlObj.tableName}  values ('${item.id}', '${item.province}','${item.city}','${item.area}','${item.post_code}','${item.area_code}');\n`;
    });
    return sqlText;
};

main()
