const express = require("express");
const cors = require('cors');

var app = express();

app.use(cors({
    origin: '*'
}))

app.use(express.json())

app.use(express.static(__dirname));

app.listen(8004, () => {
    console.log('http://localhost:8004')
})
