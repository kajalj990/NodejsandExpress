var fs = require('fs')
var readFile = process.argv[2];

fs.readFile(readFile,'utf-8',function(err,data){
    console.log(data)
})