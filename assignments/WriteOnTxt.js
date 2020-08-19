const fs = require('fs')
var fileName = process.argv[2]+'.txt'
var text = process.argv[3];

fs.writeFile(fileName,text,function(err){
    console.log("File created and saved the text");

})

fs.readFile(fileName,'utf-8',function(err,data){
    console.log(data);
})
