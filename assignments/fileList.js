// Node.js program to demonstrate the 
// fs.readdir() method 
  
// Import the filesystem module 
const fs = require('fs'); 
const path = require('path')
// Function to get current filenames 
// in directory with "withFileTypes" 
// set to "true"  
  var p = './'
fs.readdir(p,function(err, files){ 
  console.log("\nCurrent directory files:"); 
  if (err) 
    console.log(err); 
  else {
      
    files.forEach(function(file){
      if(fs.statSync(file).isDirectory()) console.log('Dir:'+file);
      else console.log('file:'+ file)
    }
    ) 
  } 
}) 