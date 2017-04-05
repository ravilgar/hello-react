var express = require("express");
var app = express();

app.use(express.static('public'));

app.listen(8080, function() {
    console.log("Server has started on port 8080!");
})
