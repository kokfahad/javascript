//console log , alert 
console.log('hello')
// alert('hi this is  weekend')

//how to get element from html and changing value of that
document.getElementById('someText').innerHTML='Hello! Good Morning';

// var age = prompt('What is your age');

// document.getElementById('age').innerHTML='your age : '+ age;

// numbers in javascrpit
 var num = 10;
 num++;
 num--;
console.log(num * 10);
console.log(num / 10);
console.log(num % 5);
 num+=10;
 num-=10;

 // functions in javascript

 function fun(){
     alert('this is a function')
 }

//  fun();

 //

 function add(num1,num2){
     res = num1 + num2;
     console.log(res);
     return res;
 }

 fnReturn = add(10,10);

 console.log("Function has returned: "+ fnReturn);


//  loops in javascript

// while loop

item=0;

while(item<100){
console.log(item);
    item++;
}

// for loop

for(i=0;i<100;i++){
    console.log(i);
}


// datatypes in Javascript

let val = 10; //number
let st_name = 'fahad'; //string
let isSuccess =false; //boolean
let arr= ['mango','banana','jackfruit']; //list......in javascrpt list is same as array
let obj = {firstname:'fahad', age:'26'}; //object .....more like key value pair
let undefine; //undefinded


//string methods in javascrpit
let fruit = 'banana';
let fruits = 'banana/napple';


console.log(fruit);
console.log(fruits);
console.log(fruit.length)
console.log(fruit.indexOf('nana'))
console.log(fruit.slice(2,6))
console.log(fruit.replace('ban','123'))
console.log(fruit.toUpperCase())
console.log(fruit.toLowerCase())
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit.split('')) //character wise split
console.log(fruits.split('/n')) 


//arrays in javascript
let fruit1 =['apple','jackfruit','berry']
let fruit2 =new Array('mango','blackberry')

console.log(fruit1)
console.log(fruit2)

console.log('to string',fruit1.toString());
console.log('join',fruit1.join(' * '));
console.log('pop: ',fruit1.pop(), fruit1);
console.log('push: ',fruit1.push('strawberry'), fruit1);

let vegetables = ['asparagus','tomato', 'broccoli'];
let allGrocerry = fruit1.concat(vegetables);
console.log('all grocerry: ' + allGrocerry);
console.log('slice: ' + allGrocerry.slice(1,4));
console.log('reverse: ' + allGrocerry.reverse());
console.log('sort aplhabets:', allGrocerry.sort());

//sorting numbers in array
let sortArr =[5,1,7,8,2,3,10,63,5]
console.log('Ascending sort :', sortArr.sort(function(a,b){return a-b}));
console.log('Descending sort :', sortArr.sort(function(a,b){return b-a}));

//inserting numbers in an array
let emptyarr = new Array();

for(let i=1; i<=10 ;i++){
    emptyarr.push(i);
}
console.log('Inserting elements in array ', emptyarr);


//Objects in Javascript
let object = {
first:'Fahad', 
last:'Khan',
age:25,
height: 170,
studentInfo: function(){                                          //can pass a function within an object
    return this.first + '\n' + this.last + '\n' + this.age;
}
}
console.log(object.first)
console.log(object.last)
console.log(object.age)
object.age =22;  //change value
object.first ='Sheikh Mohammad';  //change value
object['last'] ='Hassanuzzaman';  //another way to change value
console.log(object.age)
console.log(object.first)
console.log(object.last)
object.age++;
console.log(object.age); //increament


// Conditional Statements, Control Flow
//If Else

// var myage = prompt('What\'s your age?')
var myage = 26

if(myage >=18 && myage <= 30){
    console.log("my audience");
}
else{
    console.log("not my audience");
}

//switch statements

switch(1){
    case 0: 
      console.log('Weekend');
      break;
    case 6: 
      console.log('Weekend');
      break;
    case 5: 
      console.log('Weekend');
      break;
    default: 
      console.log('Weekday');
      break;
      
}