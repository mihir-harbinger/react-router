var express = require('express');

//create app
var app = express();

//serve folder
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express server is up on port 3000');
});
