var fs = require('fs')
var file = 'Integer.txt'

fs.readFile(file,'utf8',function(err,data){
     var numbers = data.split(' ').map(function(num){
         return parseInt(num);
     } )

     var sum = numbers.reduce(function(curr,prev){
         return curr + prev
     })

     console.log("sum of the integers in file is :"+sum);
})