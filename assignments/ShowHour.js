var strftime = require('strftime')

var data={
    days:['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'],
    shortDays:['Sun','Mon','Tues','Wed','Thru','Fri','Sat'],
    months:['January','February',' March' , 'April','May' , 'June','July','August','September','November','December'],
    shortMonths:['Jan','Feb',' Mar' , 'Apr','May' , 'Jun','Jul','Aug','Sept','Nov','Dec'],
    AM:'AM',
    PM:'PM',
    am:'am',
    pm :'pm'
}

var result = strftime.localize(data);
console.log(result('%A , %d  %B  %Y,time: %H:%M:%S'))