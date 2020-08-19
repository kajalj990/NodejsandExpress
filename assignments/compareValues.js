const fs = require('fs')
var fileName = 'Node.txt'
const wordToSearch = process.argv[2].toLowerCase();

var count = 0;
fs.readFile(fileName, 'utf8', function (err, contentFile) {
    if (err) throw err;
    var word = contentFile.toLowerCase().split(' ');
     console.log(word);
    var filteredWord = word.filter(function(text){
        //console.log(text.replace(/\s/g,' '))
        return text.includes(wordToSearch)
    })
    

     console.log('The word ' + wordToSearch + ' appeared ' + filteredWord.length + ' times in this file');
})