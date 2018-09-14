var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3001);

var fortunes = [
	"conquer your fears or they will conquer you.",
	"rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];
 
app.get('/', function(req, res) {
	res.render('home');
});
app.get('/about', function(req, res){
	var randomFortune =
	fortunes[Math.floor(Math.random() * fortunes.length)];	
	res.render('about', {fortune: randomFortune });
});
app.get('/datetime', function(req, res) {
	res.render('datetime');
});
//static pages
app.use(express.static(__dirname + '/public'));
// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

//set up handlebars view engine
var handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});
app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});


// custom 404 page
app.use(function(req, res, next){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});



app.listen(app.get('port'), function(){
console.log('Express started on http://localhost:' +
app.get('port') + '; pressCtrl-C to terminate.');
});
