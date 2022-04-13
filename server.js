var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist/noequechove,')))

var port = process.env.PORT || 8080
// app.listen(port)
// console.log('server started ' + port)

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+
    '/dist/noequechove/index.html'));
});
app.listen(port || 8080);
console.log('server started ' + port)