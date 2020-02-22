const router = require('express').Router();

/* -------- YOUR CODE -----------
This will not read the name from the URL and just return the json {message: 'hello/name'} every time 

router.get('/name',(req,res,next)=>{
	rest.status(200).json({
		message:' hello/name'
	});
});

router.post('/',(req,res,next)=>{
	rest.status(200).json({
		message: '/name'
	});
});

** it is res.send and not rest.send
** use :name when specifying slugs in the url and access them by req.params.slugname
** use req.body.<key-name> when getting data from the post body.
** use the function parseInt(..) to get the integer value.

** you made a lot of syntax error in the file
** please do the basics of node/javascript if you're still unfamiliar with the syntax


*/

router.get('/:name',(req, res)=>{
	const name = req.params.name
	res.send('<h1> Hello ' + name + '</h1>');
});


router.post('/', (req, res)=>{
	const name = req.body.name;
	const age = parseInt(req.body.age);
	var type = "";
	if (age <= 11){
		type = 'You are a child.';
	}else if (age >= 21){
		type = 'You are an adult.';
	}else{
		type = 'You are a teen.';
	}
	res.send('<h1> Hello ' + name + '</h1><br><h2>' + type + '</h2>');
});

module.exports=router;
