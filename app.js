const express = require('express');
const rookout = require('rookout');
const app = express();
const PORT = process.env.PORT || 4000;

rookout.start({
    token: '611da17334e54f86fadb1b93971e2f201fb8237d1bfe8106d49e181ab8a591f8',labels: {env: 'dev'}})

app.get('/',(req,res) => {
    res.status(200);
    res.send("Hello World!!");
});


app.listen(PORT, () => console.log(`App listening on port ${PORT} `));