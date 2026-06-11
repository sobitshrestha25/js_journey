let myName  ="Sobit";
function greet(){
    let message = "Hello";
    console.log(myName);
    console.log(message);
}
greet();
console.log(myName);
//undefined return:
function sayHello(){
    console.log("hello");
}
const result= sayHello();
console.log(result);

// ARRAYS
let students= ["Sobit", "Sandeep", "Nischal"];
console.log(students);
let fruits=["apple","banana","mango", "orange"];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits.length);
// add and remove items
let frruits=["apple","banana","mango"];
frruits.push("orange");
console.log(frruits);
frruits.pop();
console.log(frruits);
frruits.unshift("grapes");
console.log(frruits);
frruits.shift();
console.log(frruits);

// indexof and includes
let fruitts =["apple", "banana", "mango", "orange"];
console.log(fruitts.indexOf("mango"));
console.log(fruitts.indexOf("grapes"));
console.log(fruitts.includes("banana"));
console.log(fruitts.includes("grapes"));
let fru= ["apple", "banana","mango", "orange"];
for(i=0; i<fru.length; i++){
    console.log(fru[i]);
}


//for each
let frui= ["apple","banana","mango", "orange"];
for(let fru of frui){
    console.log(fru);
}

//for each
let n=[1,2,3,4,5];
n.forEach(function(num){
    console.log(num *2);
});

//map
let  numb =[1,2,3,4,5];
const doubled = numb.map(function(num){
    return num*2;
});
console.log(doubled);

//filter
let marks= [45,32,,78,12,90,55,28];
const passed= marks.filter(function(mark){
    return mark >=40;

});
console.log(passed);

//reduce
let markss= [45,32,,78,12,90,55,28];
const  total= markss.reduce(function(sum,mark){
    return sum+ mark;

},0);
console.log(total);

let markks= [45,32,,78,12,90,55,28];
const passsed= markks.filter(function(mark){
    return mark >=40;

});
const totall = passsed.reduce(function(sum,mark){
    return sum+mark;
},0);
const average = total/passed.length;
console.log(`Passed students marks: ${passsed}`);
console.log(`Average marks of passed student: ${average}`);
//spread operator 
let nepali = ["dal", "bhat", "tarkari"];
let western = ["pizza", "burger"];
let allfood = [...nepali, ...western];
console.log(allfood);