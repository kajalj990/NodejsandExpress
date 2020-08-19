const fs = require('fs')
const readLine = require('readline')

const r1 = readLine.createInterface({
    input:process.stdin,
    output : process.stdout
});

r1.question('What do you want to write in file?',(answer)=>{
    console.log('writing into the file');
 var mywriter = fs.createWriteStream('output.txt');
 mywriter.write(answer);
 console.log('file was saved')
    r1.close();
})