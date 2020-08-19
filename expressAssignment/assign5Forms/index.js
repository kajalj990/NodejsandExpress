var express = require('express')
var bodyParser = require('body-parser')
var app = express();
app.set('view engine','ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/form',function(req,res){
    res.render('Form',{qs:req.query})
})

app.post('/path',urlencodedParser,function(req,res){
    
    res.render('Path',{data:req.body})
})


app.listen(3000);