var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	res.end('Nope, not yet');
})

module.exports = router;