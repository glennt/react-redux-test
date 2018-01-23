var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/items', require('./routes/items'));

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server started, app listening at http://%s:%s", host, port)
})