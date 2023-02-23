// // var name = "simi"
// // console.log(typeof(name))

// const { prompt } = require("readline-sync");


// // data type prectice:
// // console.log(10+"20")
// // console.log(10-"20")
// // console.log("simi"+"samiksha")
// // console.log(" ."+" .")
// // console.log("simi"-"pattir")
// // console.log(true+true)
// // console.log(true+false)
// // console.log(false+true)
// // console.log(false+false)

// // null and undefine:
// // var name = null;
// // console.log(name)
// // console.log(typeof(name))

// // var num;
// // console.log(num);
// // console.log(typeof(num));



// // NaN:not a number
// // is a property of the global  object
// // its initial value is not anumber

// // var num=987654321
// // var name=987654356789
// // console.log(isNaN(num))
// // console.log(isNaN(name))

// // if(isNaN(name)){
// //     console.log("please enter the vailed number")
// // }else{
// //     console.log("right!!")
// // }

// // NaN
// // console.log(NaN===NaN)
// // console.log(Number.NaN===NaN)
// // console.log(isNaN(NaN))
// // console.log(isNaN(Number.NaN))
// // console.log(Number.isNaN(NaN))


// // operator:
// // increment and decrement operator:
// // x++ or ++x and --x or x--
// // operator after operand(postfix)
// // var num=30
// // var num2=num++;
// // console.log(num)
// // console.log(num2)

// // prifix incriment operator:in this  variable is incremented first and then expression is eveluated
// // var num=30
// // var num2=++num+2;
// // console.log(num)
// // console.log(num2)

// // comperission operator :compare to or more operands

// // var num1=45;
// // var num2=20;
// // console.log(num1==num2)
// // console.log(num1!=num2)
// // console.log(num1>num2)
// // console.log(num1<num2)
// // console.log(num1>=num2)
// // console.log(num1<=num2)


// // logical operator:
// // var num1=45;
// // var num2=20;
// // console.log(num1>0 && num1<num2)
// // console.log(num1>0 || num1>num2)

// // console.log(num1>num2 && num2 > -50 && num2<0);
// // console.log(num1>num2 && num2 > -50 && num2<0);
// // console.log(!(num1>num2 || num2>0 ))

// // console.log(!true)


// // string concatination(operat0r)
// // concates two string value togather and return another str is a union of the two operands strings
// // var Name="simi"
// // console.log(Name+" pattir")



// // swep two value:
// // var a= 5;
// // var b=10;
// // c= b;
// // b=a
// // a=c
// // console.log(a)
// // console.log(b)


// // without third  veriable
// // var a= 5;
// // // var b=10;
// // // a=a+b
// // // b=a-b
// // // a=a-b
// // // console.log(a)
// // // console.log(b)


// // //difference between ==(it checks only value) and ===(it check the type also)
// // // var a=9
// // // var b="9"
// // // console.log(a==b)
// // // console.log(a===b)


// // // var yourAnswer = readlineSync.question(question);
// // // var readlineSync = require("readline-sync");

// // // if else:
// // // var num=9
// // // if (num==9){
// // //     console.log("right!!!")
// // // }else{
// // //     console.log("wrong!!!")
// // // }

// // // var year=200;
// // // if (year%4==0){
// // //     if (year%100==0){
// // //         if (year%400==0){
// // //               console.log("yess leap year")
// // //         }else{
// // //             console.log("not a leap yer")
// // //         }

// // //     }else{
// // //         console.log("yes this is leap year")
// // //     }

// // // }else{
// // //     console.log("not a leap year")
// // // }

// // // truly and falsy(0,"",null,NON,undefine)value in javascript
// // // score=0
// // // if (score=0){
// // //     console.log("no loss the game ")
// // // }else{
// // // //     console.log("won the game!!")
// // // // }

// // // // ternary (conditional operator):takes three operands
// // // // short way of if else:
// // // // var age= 17;
// // // // if (age>=18){
// // // //     console.log("you can vote")
// // // // }else{
// // // //     console.log("you can't vote")
// // // // }
// // // // ternary >>>>>
// // // // // 
// // // // var age=18;
// // // // console.log(age>=18?"you can vote":"you can't vote")
// // // // // condition?value1:value2

// // // // switch statmenet:
// // // // evaluates  an expression matching the expressions valu to a
// // // // case clause and executes statments associated with case:
// // // // 1st without break statment
// // // var area="circle"
// // // var PI =3.142, l=5,b=4,r=3;

// // // if (area=="circle"){
// // //     console.log("the area of the circle is: "+ PI*r**2)
// // // }else if (area=="triangle"){
// // //     console.log("the area of the triangl is: "+ (l*b)/2)

// // // }else if (area=="rectangle"){
// // // console.log("the area of the triangl is: "+ (l*b))
// // // }
// // // else {
// // //     console.log("enter te valid data")

// // // }


// // // switch stetment:
// // var area="circle";
// // var PI =3.142, l=5,b=4,r=3;
// // switch(area){
// //     case "circle":
// //         console.log("the area of the circle is: "+ PI*r**2);
// //         break;
// //     case "triangle":
// //         console.log("the area of the triangl is: "+ (l*b)/2);
// //         break;
// //     case "rectangle":
// //         console.log("the area of the rectangle is: "+ (l*b));
// //         break;
// //     default:   
// //         console.log("please enter valid");
// // } 
// // break statment::::it terminates the current loop. switch ,or label statment and tranfers program
// // control to the statment following the terminated  statment.



// // loop
// // while loop statment
// // the while loop
// //  var num=0;
// //  while(num<=20){
// //      console.log(num)
// //      num++;
// //  }




// // //  do while loop :
// // // it cheack the condition in the last
// // // var num=20;
// // // debugger;
// // // do{
// // //     console.log(num);
// // //     num++;

// // // }while(num<=10)


// // // for loop:
// // // syntex:    for(initializer;condition;iteration){
// //     // code to be exicuted
// // // }

// // // for( var num=0 ;num<=10;num++){
// // //     console.log(num)
// // // };


// // var table=12
// // for (var number=1;number<=10;number++){
// //     var table=12

// //     console.log(table+"*"+number+"= "+table*number)
// // }



// // **************************************FUNCATION*********************************************
// // Funcation:   it is a block of code designed to perform a particular task:
// // before we use function ,we need to define it 


// // function sum(){
// //     var a=9, b=12
// //     var c=a+b;
// //     // console.log(c)
// // }
// // console.log(c)
// // sum()

// // function parameter vs function argument:
// // parameters:function parameters are the names listed in function 's defination.
// // function arg. real values passed to the parameter

// // function sum(a,b){
// //         // var a=9, b=12
// //         var c=a+b;
// //         console.log(c)
// //     }
// //     // console.log(c)
// // // sum(2,8)

// // // WHY FUCTION : you can reuse the function.
// // // can use one code many times with different arg.
// // // OR
// // // a function is a group of code which can be called anywhere in your program .this eliminates the need of writing the same code and again  
// // // DRY: do not yourself


// // // function expression: creat a function and put in into a veriable

// // function sum(a,b){
        
// //         var c=a+b;
// //         console.log(c)
// //     }
    
// // var exp =sum(2,8)
// // exp ;



// // function return keyword:
// // 1.when js reaches a return statment the fun. will stop exicuting
// // function sum(a,b){
// //         // var c=a+b;
// //         return a+b
// //     }
    
// // var exp =sum(2,2)
// // console.log(exp);



// // function anonymous   

// // it is similar to and has the same syntex
// // // as a function declaration  one can define "named" function expression (where thename the expression might be used in the call stack for example )
// // // or "anonymous" function expressions.
// // var exp=function(a,b){
// //     //         // var c=a+b;
// //             return a+b
// //         }
        
// // //  =sum(2,2)
// // // var sum =exp(2,5);
// // // var sum1=exp(10,30)
// // // console.log(sum>sum1);


// // // ****************************MORDEN JAVASCRIPT*******************************
// // // features of ECMAscript 2015 also knoen as ES6(6th addition)
// // // LET or CONST and VAR:
// // // var nam="simi"
// // // console .log(nam)
// // // nam="pattir"
// // // console.log(nam)


// // // let nam="simi"
// // // console.log(nam)
// // // nam="pattir"
// // // console.log(nam)

// // // const nam="simi"
// // // console.log(nam)
// // // nam="pattir"
// // // console.log(nam)

// // function biodata(){
// //     let myFirstName="simi"
// //     console.log(myFirstName)

// //     if (true){
// //         var myLastName="pattir";
// //         console.log("inner"+myLastName)
// //         console.log(myFirstName)
// //     }
// //     console.log(myLastName+"outer")
// // } 
// // biodata();

// // function biodata(){
// //     let myFirstName="simi"
// //     console.log(myFirstName)

// //     if (true){
// //         let myLastName="pattir";
// //         console.log("inner"+myLastName)
// //         console.log(myFirstName)
// //     }
// //     console.log(myLastName+"outer")
// // } 
// // biodata();
// // let and const: block scope and var is function scope



// // Template literaforls(string)

// for(let num=1;num<=10;num++){
//     let table=12;
//     // console.log(table+"*"+num+"= "+table*num)
//     console.log(`${table}*${num}=${table*num}`);


// }



// default parameters:
// default function parameters allow named parameters to be initialized with default values if no values or undefined is passed
// function mult(a,b=9){
//     return a*b
// }
// var m=mult(3)
// console.log(m)



// fat arrow function
// const sum=()=>{
//     let a=5 ,b=5
//     // let sum=(a+b)
//     // return `sum of two number ${a+b}`
//     // no need to write is  return also u can exicute it in one

// // }
// // console.log(sum());
// // like this:
// // const sum=()=>`the sum of two number is ${(a=5)+(b=5)}`
// //     // let a=5 ,b=5
// //     // let sum=(a+b)
// //     // return `sum of two number ${a+b}`
// //     // no need to write is  return also u can exicute it in one

// // console.log(sum());




// // *************************ARRAYS IN JAVASCRIPT*******************************************************************
// // var Friends=["simi","pooja","shivani","pooja"]
// // // console.log(Friends[0])
// // // console.log(Friends.length-1)
// // for (var i=0;i<Friends.length;i++){
// //     console.log(Friends[i])

// // }


// // after es6 er have FOR IN AND FOR OF loops:


// // var Friends=["simi","pooja","shivani","pooja"]

// // for(let elements in Friends){
// //     console.log(elements)
// // }



// var Friends=["simi","pooja","shivani","pooja"]

// for(let elements of Friends){
//     console.log(elements)
// }


// Array .prototype.forEach()
// calles a function in a array.
// we cant use break sta. in this 
// var Friends=["simi","pooja","shivani","pooja"]
// Friends.forEach(function(element ,index,array){
//     // console.log(element)
//     // console.log(index)
//     console.log(array)
// })
    

// var Friends=["simi","pooja","shivani","pooja"]

// Friends.forEach((element ,index,array) => {
//         console.log(element)
//         console.log(index)
//         console.log(array)
// });
        


// *******************SEARCH AND FILTER IN AN ARRAY****************************************************
// 1.array .prototype.indexOf()
// it search forward
// return first element (jo element phle aata hai )(NON return if element is not find)
// var Friends=["simi","pooja","shivani","veerpal","tani","aayu"]
// console.log(Friends.indexOf("pooja",2))
// ab ye 2nmbr index se cheack krna start krega 




// 2.array .prototype.lastIndexOf()
// return the last element(greatest )of an array
// // it search backward
// var Friends=["simi","pooja","shivani","veerpal","tani","aayu"]
// console.log(Friends.lastIndexOf("pooja",2))



// 3.array .prototype.includes():
// Determines that a array contains a value or not(return true and false)
// var Friends=["simi","pooja","shivani","veerpal","tani","aayu"]
// console.log(Friends.includes("pooja",))
// console.log(Friends.includes("pooja",4))



// **********************FOR FILTER*********************
// array.prototype.find()😉😉😉
// it returns only one element
// find present array


// const price=[200,700,300,100,600,900,]

// // price>400
// const findel=price.find((currVal)=>{
//         return currVal>400
// })
// console.log(findel)

// withot return
// console.log(price.find((currVal)=>currVal>400));
// console.log(price.findIndex((currVal)=>currVal>400));

// NOTE : if not detisfied and value is not existed in array return -1
// in FindIndex:if value not in array return undefined



// array.prototype.filter()😉😉😉
// returns a new array containing all elements of the calling 
// array for which the provided filtering function return true

// const price=[200,700,300,100,600,900,]
// // // price<400

// const newPrice =price.filter((element,index)=>{
//     return element>1400
//     // if element is not in array retun[]
// })
// console.log(newPrice)


// *************************************HOW TO SHORT AND COMPARE AN ARRAY***********************
// array.prototype.sort()😉😉😉
// sort(method sorts the elements of an array in place and return sorted array =(assending)a,b,c,1,1,2,)

// however ,if the number are sorted as string like "25" is bigger than "100" bcoz "2 " is bigger than "1"




// var list=["w","r","y","j","a","b","c"]
// b=[]
// console.log(list.sort());


// // splice()😉😉😉
// const a=["jan","feb","march","april","june"]
// const u=a.splice(1,1,"simi")
// console.log(a)


// ******************array substract and reduse method****************************************************************************
// array.prototype.map():

// const array1=[1,4,9,16,25];

// let newArr=array1.map((curElem,index,arr) => {
//     return curElem > 
//     9;

// });
// // console.log(array1)
// console.log(newArr);


// ****
// const array1=[1,4,9,16,25];
// let newArr=array1.map((curElm,index,arr) =>{
//     return `index of ${index} and the value is ${curElm} belong to ${arr}`
// });

// console.log(newArr)

// const array1=[25,36,64,81];
// let arrsqr=array1.map((curElm) => {
//     return Math.sqrt(curElm);
//     // sqer is a method()
// });
// console.log(arrsqr)


// question: multiply each element bye 2 and return only  those elements which are greater than 10?

// let arr=[1,2,3,4,5,7,8,9,12]
// // // we can use chaining too(means we can use two or three method together also)
// let array=arr.map((curvalue)=>{
//     return curvalue*2
// }).filter((curElm)=>{
//     return curElm>10
// }).reduce((accumlator,curElem)=>{
//     return accumlator+=curElem
// });
// console.log(array)
// // console.log(curElm)
// // 
// // how we can write it in one line also
// let array=arr.map((curvalue)=> curvalue*2).filter((curElm)=>curElm>10)
// console.log(array)


// ********************************😉😉😉Reduce method()😉😉😉***************************
// Flatten an array means  to convert the 3d or 2d array into a single and domensional array

// the reduce ()  method exicutes a reducer function(provide by u) on each element of the array.resulting in single output value
// reduce takes four argument:
// Accumulator (jma krna )
// current value
// current index 
// source Array
// let arr=[1,2,3,4,5,6,]
// let sum=arr.reduce((accumulator,curEle,index,arr)=>{
//      return accumulator+=curEle
//  })
// console .log(sum)

// let arr=[1,2,3,4,5,6,]
//  let sum=arr.reduce((accumulator,curEle,index,arr)=>(accumulator+=curEle));
// console .log(sum)



// array.prototype.push()😉😉😉
// add one or more elements to the array in the end of athe array and return a new length

// const animals=["cat","dog"]
// animals.push("cow","rabit")
// console.log(animals)


// array.prototype.unshift()😉😉😉
// add one or more elements in the array in the begning ofthe array

// const animals=["cat","dog"]
// animals.unshift("cow","rabit")
// console.log(animals)
// ####how it will work with the intiger???####
// const number=[1,2,3,5,]
// console.log(number.unshift(4,9))

// const number=[1,2,3,5,]
// number.unshift(4,9)
// console.log(number)


// array.prototype.pop()😉😉😉
// pop() method remove the last element 
// const a=["apple","red","white","yellow"]
// console.log(a)
// console.log(a.pop())
// console.log(a)

// array.prototype.Shift()😉😉😉
// the shift() method removes the first element frome an array
// const a=["apple","red","white","yellow"]
// console.log(a)
// console.log(a.shift())
// console.log(a)

// question : 1.add dec and the end of the array
// what is the return value of thesplice method?
// update march to March 
// delete june from an array?

// ans1:
// const month=["jan","march","April","june","july"];
// // const months=month.splice(5,0,"Dec")
// const len=month.splice(month.length,0,"Dec")
// // means add the Dec on the fifth index (5 to 0)
// console.log(month)


// ans:2
// const month=["jan","march","April","june","july"];
// const len=month.splice(month.length,0,"Dec")
// console.log(len)
// slice also use for delete

// Ans:3
// // const month=["jan","march","april","june","july"];
// // const index=month.indexOf("march")
// // if (index!=-1){
// //     const updt=month.splice(index,1,"march")
// //     console.log(month)
    

// // }else{
// //     console.log("sorry data is not existed ")
// // }
// // const updt=month.splice(1,1,"march")
// // console.log()


// // // ans:4
// // const month=["jan","march","april","june","july"];
// // const index=month.indexOf("june")

// // if (index!=-1){
// //     const updt=month.splice(index,1,)
// //     console.log(month)
// //     // console.log(updt)
    
// // }else{
// //     console.log("sorry data is not existed ")
// // }


// // ********************************ESCAPE CHAR.******************************************************
// // const a="my name is samiksha`pattir`i am a student"
// // console.log(a)


// // how to  find a string in  a string:
// // string prototype .indexOf(search[,fromIndex])
// // indexOf method return the index of (the position of)the first occurrece of a specific text in a string.

// // const data ="my name is samiksha pattir"
// // console.log(data.length)

// //*********************string search***************************


// // const data="my name is samiksha pattir"
// // let sdata=data.search("samiksha")
// // console.log(sdata)

// // ***********Extracting string part **************
// // THree method for this:
// // slice():
// // var str="apple ,banana,kiwi"
// // let res=str.slice(0,5)
// // console.log(res)

// // challenge:
// // let data="elcome, to Complete JavaScript Tutorial for Beginners in Hindi in 2021. We will cover Basic to Advanced JavaScript, Modern JavaScript, and OOPS in JavaScript in Hindi. We go through 15+ JavaScript Interview questions and answers, and 20+ Challenges in JavaScript in Hindi. In the end, we will create 7+ Projects in JavaScript in Hindi and Many Bonus Topics like API, WEB API, JSON, AJAX, and many more all in One Complete JavaScript Course in Hindi. " 
// // let ndata= data.slice(0,280);
// // console.log(data)
// // console.log(data.length)


// // substring: can not accept nagative indexing
// var str="apple, banana, kiwi"
// let res=str.substring(7,-2)
// console.log(res)


// // substr():similar to slice but  different is that the second parameter specifies the lenght of the extracted part
// var str="apple, banana, kiwi"
// let res=str.substr(-10);
// console.log(res)
// (i didn't understand this method)

// ***********replacing string*************
// string.prototype.replace(searchFor,ReplacWhit)
// replace a specified value with anthor value

// let line="my name is samiksha and another namre is samiksha"
// let replace=line.replace("samiksha","Simi")
// // console.log(replace)
// // replace does not change the original data
// // and it case sensitive and by default it replace first match:

// // ****************Extracting string characters😉😉😉*************************
// // Three method:

// // charAt(position):Method return the character at a specified index(position) in string
// // property access []
// // let str="HELLO WORLD";
// // console.log(str.charAt(0))


// // charCodeAt()(position):
// // it returns the unicode of the character at a specified index in a string.the method return UTF-16 code (an intiger 0-65535)

// // let str="HELLO WORLD";
// // console.log(str.charCodeAt(0))

// // last char:
// // let str="HELLO WORLD";
// // let last=str.length-1
// // console.log(str.charCodeAt(last))


// // property Access 
// // ECMAscript 5 (2009) allows property access [ ]on string
// // let str="HELLO WORLD";
// // console.log(str[1])


// // ************************STRING TO ARRAY********************
// // var txt="a,b,c | d,e,f"
// // // console.log(txt.split(",")) //split on commas 
// // // console.log(txt.split(" "))  //split on spaces
// // console.log(txt.split("|")) //split on pip


// // ************DATE AND TIME😉😉😉*****************************
// // Date Method (get and set)
// // Time Method (Get and Set)


// // javascript date obejects represent a single moment in time in a platform- independent format .Date object contains a number the 
// // represents millionseconds since 1 january 1970 UTC

// // Creating date object 
// // there four ways to creat new date object
// new Date()
// new Date (year,day,hours,minutes,seconds,milliseconds)
// // it takes 7 arguments
// new Date(milliseconds)
// // we can not avoid month section 
// new Date(date String)
// Greenwich Mean Time (GMT)
// new Date
// let cDate=new Date();
// console.log(cDate);

// console.log(new Date())
// console.log(new Date().toLocaleString());
// console.log(new Date().toString())
// // 

// // date.Now():
// // returns a numeric value corresponding to currunt time-the number of millionsconds elaspend since jan 1 ,1970 00:00:00 =>Universal Time Coordinated (UTC).
// // console.log(Date.now());
// // in javascript january:0 and december:11

// // var d=new Date(2023,0,5);
// // var d=new Date(2023,0);
// // console.log(d.toLocaleString());


// // // ***New Date(datestring)
// // var d=new Date("january 8,2023 2:16:00")
// // // console.log(d.toLocaleString())
// // console.log(d)


// // var d=new Date(0)
// // // var d=new Date(1609574531435)
// // console.log(d.toLocaleString())



// // *********************************Date Method*************************

// const curDate=new Date();
// // console.log(curDate.toLocaleString());
// // console.log(curDate.getFullYear());
// // console.log(curDate.getMonth());
// // // console.log(curDate.getDate());
// // // console.log(curDate.getDay());

// // // how to set the invisual date:
// // console.log(curDate.setFullYear(2023));
// // console.log(curDate.setMonth(10));
// // console.log(curDate.setDate(8));
// // console.log(curDate.toLocaleString());



// // **TIME METHOD:
// const curTime=new Date();

// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
//// console.log(curTime.getSeconds());
//  console.log(curTime.getMilliseconds());
// TIME SET 
// let curTime=new Date();
// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// // console.log(curTime.getSeconds());
//  console.log(curTime.getMilliseconds());




// let curTime=new Date();
// // console.log(curTime.setTime());
// console.log(curTime.setHours(8));
// console.log(curTime.setMinutes(8));
// console.log(curTime.setSeconds(8));
// console.log(curTime.setMilliseconds(8));


// ****************JAVASCRIPT MATH OBJECT********************
// console.log(Math.PI);

// math.round()
// returns the value of x rounded to its nearest integer

// let num=10.501;
// console.log(Math.round(num));

// math.pow():
// math.pow()(x,y)returns the values of x to power y

// console.log(Math.pow(2,3));
// console.log(2**3);


// // math.sqrt():
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(81));
// console.log(Math.sqrt(66))


// Math.abs():
// returns the absolute(positive )value of x
// console.log(Math.abs(-55))
// console.log(Math.abs(-55.5))
// console.log(Math.abs(-77))


// math.ceil()
// returns the value of x rounded up to its nearest
// console.log(Math.ceil(66.001))
// console.log(Math.round(66.001))


// math.floor()
// rounded down its value
// console.log(Math.floor(66.9))


// // math.min()
// console.log(Math.min(0,56,-34,90.100,678))
// console.log(Math.max(0,56,-34,90.100,678))

// math.rendom
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random()*10));

// math.trunc()
// retuen the integer part of a number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-4.6));




// ******************MATH DOM TYPE******************************************************************
Window:
