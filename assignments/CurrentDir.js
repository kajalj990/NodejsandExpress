var fs = require('fs')

var myReadStream = fs.createReadStream(__dirname + '/output.txt','utf-8');

myReadStream.on('data',function(data){
    console.log(data);
})