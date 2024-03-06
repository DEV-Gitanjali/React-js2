// array objects destructuring import and export
// map filter arrow fncs (implicit return ) spread operator
// immutable vs mutable
// premitive & reference

// arrays
// immutable way to change state
var state =[1,2,3,4,5];
var copy =[...state];
copy.pop();

// state is a immutable object &  we can give any type of value here

var state ={name :"harry" , age:24}
var copy ={...state};
copy.age=25;

state=copy;

// destructuring
var obj ={name:"harry" , age:23, rollNo:10}
 const{age} =obj
 age

 var obj={
    name:"subham", social:{
        facebook:{
            fiest:"haa",
            sec:"suuu",
        },
    },
 };

 const{sec}=obj.social.facebook;



//  function destructuring
var arr =[12,function(){},13];

// var[first,second]=arr
// in this method we can access the value first and third
var[chaa,,halwa] =arr;


// import & export
 function cart(){

 }

//  arrow function implicit return

const abcd =()=>({name:'abcd', age:12})
console.log(abcd())

// map & filter
var arr=[1,2,3,4,5];

const ans =arr.map(val=>val*12)
console.log(ans);
    
var state=[11,22,3,4,5,6,7,89,9];
 const anss=state.map(elem=>elem>5? elem+5:elem )

//  filter 

var arr =[1,2,3,4,5,6];

const alem = arr.filter(elem => elem>4)

// /  filter 

var arr =[1,2,3,4,5,6];

const long = arr.filter(elem => elem>4)
