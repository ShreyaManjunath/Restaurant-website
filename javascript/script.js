$(document).ready(function(){

  $("#header, .info").ripples({
  dropRadius: 25,
  perturbance: 0.6,

});
//magnific popoup
$('.parent-container').magnificPopup({
	delegate:'a',
	type:'image',

	gallery:{
		enabled: true
	}
});




});

const express = require('express');
const app = express();
const port = 8000;

//use exports router
app.use('/', require('./routes/index'));

app.listen(port,function(err){
	if(err){
		console.log("error in running the server");
	}
	console.log("server is running on port: $(port)");
});