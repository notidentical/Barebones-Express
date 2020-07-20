var express = require("express");

var app = express();

//Routes. Note that routes are used in ORDER, i.e. the first one that it matches is the ONLY route that will be run.
// "/" => "Hello!"
app.get("/", function(req,res){
	res.send("Hi There m8 how u doin' bruh!");
});

app.listen(8080, process.env.IP,  function() {
	console.log('Server listening on port ' + 8080); 
});