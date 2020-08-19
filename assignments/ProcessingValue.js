//var concatStream = require('concat-stream')
const fs = require('fs')
var file = 'Node.txt'

fs.readFile(file,'utf8',function(err,data){
    var arrayWords = data.split(' ')
    console.log(arrayWords)
})