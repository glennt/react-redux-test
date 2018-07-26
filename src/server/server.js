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

app.get('/redirect', (req, res) => {

    res.writeHead(302, {
        'Location': 'https://s3.amazonaws.com/prod.kfcore.reporting/publications/assets/images/projects/customer/capGemini/Capgemini-Logo-2017.png',
        'Content-Type': 'octet-stream'
    });
    res.end();

});

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server started, app listening at http://%s:%s", host, port)
})