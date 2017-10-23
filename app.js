var express = require('express');
var app = express();
var port = 5000;

//var random = randomNumber(100,500);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

app.use(express.static('public'));

app.listen(port, function () {
    console.log('Listening on port', port);

});

app.get('/random', function (req, res) {
    var random = {
        number: randomNumber(100, 500)
    }
    //console.log('Random Number: ', random.number);
    
    res.send(random);
});