var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function(req, res)
{
	delete req.session.token;

	var data = { success: req.session.success };
	delete req.session.success;

	res.render('login', data);
})

router.post('/', function(req,res)
{
	request.post(
	{
		url = config.userUrl + '/authenticate',
		form = req.body,
		json: true
	}, function(err, response, body)
		{
			if(err) return res.render( 'login', { error: 'An error occurred' } );
			if(!body.token) return res.render( 'login', { error: 'Wrong username or password' } );
			req.session.token = body.token;
			var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
			res.redirect(returnUrl);
		})
})

module.exports = router;