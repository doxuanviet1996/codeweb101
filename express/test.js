var app = require('express')();

app.get('/', function(req, res)
{
	res.end('dm anh beo');
})

app.listen(3000);