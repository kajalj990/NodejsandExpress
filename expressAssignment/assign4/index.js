var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

const port = process.env.PORT || 3000 ;

var date = new Date("2013-03-10T02:00:00Z");
app.get('/time',function(req,res){
  res.send(date.toISOString())
  //console(date.toISOString)
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
// PS C:\Users\Kajal\Desktop\Nodejs\expressAssignment\assign4> $env:port=8080
// PS C:\Users\Kajal\Desktop\Nodejs\expressAssignment\assign4> node index