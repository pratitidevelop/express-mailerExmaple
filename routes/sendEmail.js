 	var express = require('express');
 	var router = express.Router();
 	var mailer = require('express-mailer');


 	router.get('/', function (req, res, next){
 		res.render('sendEmail', { title : 'Send Email with express-mailer'});
 	});

 	router.post('/', function (req, res, next){
 		//console.log(req.body);
 		res.mailer.send('emailbody', {
	 			to : req.body.receiverEmailId ,
	 			subject : req.body.subject ,
	 			bodytext : req.body.emailBody
 			},
 			function (err){
 				if(err){
 					console.log(err);
      				res.send('There was an error sending the email');
      				return;
 				}
 				 return res.json({
 				 	error : false,
 				 	msg :'Email sent!'
 				 });
 				
 			}

 		);
 	});

 	module.exports = router ;

 	 