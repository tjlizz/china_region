const express = require('express');
const app = express();
const port = 96;
const path = require('path');
const {readFile} = require('./tool');
app.use(express.static('public'))

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
