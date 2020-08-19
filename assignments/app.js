//phase 1
//var cal = require('./CalculatorNode')
//phase2
var sum = require('./operations/add')
var subtract = require('./operations/subtract')
var divide = require('./operations/divide')
var mult = require('./operations/multiply')
var firstOp = +process.argv[2]
var secondOp = +process.argv[3]
/*//phase1
cal.sum(firstOp,secondOp)
cal.multiplication(firstOp,secondOp)*/

//phase2
sum.sum(firstOp,secondOp)
mult.multiplication(firstOp,secondOp)
divide.divide(firstOp,secondOp)
subtract.subtract(firstOp,secondOp)

//phase 3
var moment = require('moment')

console.log('Today is :'+moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
