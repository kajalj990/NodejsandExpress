var express = require('express')

var app = express();
app.set('view engine','ejs')

app.get('/year',function(req,res){
    res.render('birthyear',{data:req.query})
})

app.listen(3000)