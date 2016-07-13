
//Different datatypes
var s = 1;//number
var d = 'javaScript';
var e = ['a','b','c','d'];//array
var non = {name:"me", number:8}; //object
var bg=true;//boolean


// variables
var linebreak = '</br>';// for line break
var c;    //declareing the variable
document.write('the variable is'+''+c);//outpot undefined
document.write( linebreak);
document.write( linebreak);
var a;//declareing the variable
a= 10;//initialization of the variable
document.write('the variable output is'+''+a);//output 10;
document.write( linebreak);
document.write( linebreak);

//Operators
var x = 50;
var y = 20;
var z = x + y;
document.write('the variable output after arithmetic operator is'+''+z);//output 70;
document.write( linebreak);
document.write( linebreak);

var some = 100;
some += 50;
document.write('the variable output after the += operator is ='+''+some);//output 150;
document.write( linebreak);
document.write( linebreak);

var ja=10;
ja++;
var bt=ja;
document.write('the variable output after the ++ operator is'+''+bt);//output 11;
document.write( linebreak);
document.write( linebreak);

//parseInt parseFloat.

var br = 12.626;
var brInt = parseInt(12.626);
document.write('the variable output is using parseInt'+''+ brInt);//output 12
document.write( linebreak);
document.write( linebreak);

var gt = '15.67';
var shFloat =parseFloat('15.67');
document.write('the variable output is using parseFloat'+''+shFloat ); //output
document.write(linebreak);
document.write(linebreak);

//dom manipulation
var h = 'I am doing DOM Manipulation';
document.getElementById('test').innerHTML = h;

//adding string

var text = 'i am a';
text += ' new string';
document.write('the variable output after string concata is'+''+text);//output i am a new string;
document.write( linebreak);
document.write( linebreak);

//adding string and numbers
var st = 'test';
var pt = ' something';
var nt = 10;
var qt = st + pt + nt;
document.write('the variable output after adding strings and numbers'+''+qt);//test something 10;
document.write( linebreak);
document.write( linebreak);

//local and global variable
var c;//undefined
c = 1;//1
if(true){
    var c;
    c = 10;//10
}
document.write('value of c is'+ c);//10
function someFunction(){
    var c;
    c = 20;
    document.write('value of c inside the function is'+ ""+c);//20
}
someFunction();

//type of operator
document.write(linebreak);
document.write( linebreak);
document.write('value of c in after the function is'+"" + c);//10
var sv = 1;
document.write('type of is a '+ ''+ typeof sv) ;
document.write(linebreak);
document.write( linebreak);
var sv = 'something';
document.write('type of is a '+ ''+ typeof sv) ;
document.write(linebreak);
document.write( linebreak);
var sv =true;
document.write('type of is a '+ ''+ typeof sv) ;
document.write(linebreak);
document.write( linebreak);
var sv = ['a','b','c','d'];
document.write('type of is a '+ ''+ typeof sv) ;
document.write(linebreak);
document.write( linebreak);
var sv = {name:"me", number:8};
document.write('type of is a '+ ''+ typeof sv) ;
document.write(linebreak);
document.write( linebreak);
//Different datatypes

var s = 1;//number
var d = 'javaScript';
var e = ['a','b','c','d'];//array
var non = {name:"me", number:8}; //object
var bg=true;//boolean


// length property

var stnew = 'i am a new string '
document.write('The length of the String is'+''+stnew.length);
document.write(linebreak);
document.write(linebreak);
var add = ['red','yellow','green','blue','purple','pink'];
document.write('The length of the Array is'+''+stnew.length);
document.write(linebreak);
document.write(linebreak);
//emailvalidation
var em = 'abc@gmail.com';
if('abc@gmail.com'.indexOf('@') ){
    alert('its an email');
}
else{
    alert('its not ban email');
}

var em = 'btd@gmail.com';
if ('abc@gmail.com'.indexOf('@')!= -1 ){
    alert('its an after validation email');
}
else{
    alert('its not ban email');
}
//variable hoisting.
var cbt;
document.write('This variable is '+''+ cbt );//undefined
document.write(linebreak);
document.write(linebreak);
var bts;
bts=2;
document.write('the value of the variable is'+''+bts);//2
document.write(linebreak);
document.write(linebreak);
tfs = 10;
document.write('The value is'+""+tfs);
var tfs;
document.write(linebreak);
document.write(linebreak);