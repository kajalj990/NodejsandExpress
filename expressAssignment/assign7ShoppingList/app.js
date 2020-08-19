var express = require('express')
var controller = require('./controller/appController')

var app = express();

app.set('view engine','ejs')

app.use(express.static(__dirname+'/public'))

controller(app)
app.listen(3000,function(err){
    if (err) throw err
    console.log("Listening on app 3000!")
})