const express = require("express");
const app = express();

var http = require('http');



app.get("/", function(req,res){
	var link = Math.random() < 0.5 ? "<a href='/blue'>Blue</a>" : "<a href='/green'>Green</a>";
	res.send('<body>'+link+'</body>');

});

app.get("/blue", function(req,res){
	res.send('<body style="background:blue;"><a href="/">Home</a></body>');
});


app.get("/green", function(req,res){
	res.send('<body style="background:green;"><a href="/">Home</a></body>');
});

app.listen(3000, function(){
	console.log("app listening on port 3000; press Ctrl-C to terminate");
});
  
