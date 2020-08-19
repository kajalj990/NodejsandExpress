var readline = require('readline')
const { stdin, stdout } = require('process')

var read = readline.createInterface({
    input:stdin,
    output:stdout
})

read.question('What is your name? ',(answer)=>{
    console.log('Hello '+answer+'!')
    read.close();
})