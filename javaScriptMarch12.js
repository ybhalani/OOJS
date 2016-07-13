/**
 * Created by aarna on 3/12/2016.
 */
//Bind
var recheck="<br>";
function nameFirst(){
    document.write("This is a"+ this);
   // document.write (this.firstName);
}
document.write("<br>");
document.write(nameFirst());
document.write("<br>");
var person= {
    firstName: "AAA"
}
 var newWord = nameFirst.bind(person);
newWord();
/////////////////////////////////////////////


//function this

var fname="Priyanka";
var lname='Dhyani';
function myFullName(){
    document.write(this.fname +" "+ this.lname);

};
myFullName();
document.write("<br>");
var myName={
    fname:"Aarna",
    lname:"Dhyani",
    myFullName: function(){
        document.write(this.fname +" "+ this.lname)
    }

}
myFullName();
myName.myFullName();
//data obj
var employee=[
    {'name':'Alex','age': 34},
    {'name':'Vb','age': 30}
]

var company={
    employee:[
        {'name':'Peter','age': 94},
        {'name':'Ab','age': 300}
    ],
    details:function(){
        document.write("Name is ="+this.employee[0].name + " " +" Age is =" +this.employee[0].age)
        document.write(recheck);
        document.write("Name is ="+this.employee[1].name + " " + " Age is =" +this.employee[1].age)
    }
}
document.write(recheck);
var newCompany =company.details;//when using company.details() getting{'name':'Peter','age': 94},
//whwn company.details then 'name':'Alex','age': 34
newCompany();
document.write("<br>")
//binding
var newCompany1 = company.details.bind(company);
newCompany1();

//call
function setName(name,age){
    this.name=name;
   // this.age = age;
}


 document.onclick = function(){
    setName.call(document, 'Gem');
};
document.write(recheck);

 // console.log( setName.call(document, 'Gem',5)) ;

//setName.apply(document,arguments);

//apply

function setName1() {
    this.firstName = arguments[0];
    this.firstName = arguments[0];
}
    function callSetName() {
        setName.apply(document, arguments);
    };
    document.write(callSetName("Ben", "hammond"));

//example of call apply and bind
var obj = {
    value:100
};
function add(num1,num2){
   alert(this.value + num1 + num2);
}
add.call(obj,200,300);
add.apply(obj,[10,20]);
var objAdd = add.bind(obj);
objAdd(50,50)


//closure example

function addClosure(x){
    return function (y){
        return x + y;
    }
}
alert(addClosure("closure is :"+5)(5));

//
function some(){
    var no = 10;
    no1 = 20;
    return no + no1;
    return function(){
        var no2 = 5;
        return no + no1 + no2;
    }
return;
}
alert("some is"+some());

////
var person = {
    firstName: "Penelope",
    lastName: "Barrymore",
    fullName: function () {

        document.write(this.firstName + " " + this.lastName);

        // console.log(person.firstName + " " + person.lastName);
    }
}
person.fullName();
document.write(recheck);

//call
var num = {num:20};
var addThis = function(a){
    return this.num + a;
};

document.write(" return num by call"+ addThis.call(num,30));
document.write(recheck);
//apply
var num = {num:20};
var addThis = function(a,b,c){
    return this.num + a+b+c;
};
var arr = [1,2,3];
document.write(" return num by apply"+ addThis.apply(num,arr));
document.write(recheck);