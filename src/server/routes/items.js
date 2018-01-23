var express = require('express');
var router = express.Router();

var defaultItem = {
    id: 1,
    text: 'This is some text'
}

// define the home page route
router.get('/:id', function (req, res) {
    res.send(defaultItem);
})

module.exports = router;