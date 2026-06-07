function greet (){
    console.log("hello im sobit");
}
greet();
function greet(name){
    console.log(`Hello I am ${name}`);
}
greet("Sobit");
greet("ram");
greet("hari");
function add(a,b){
    return a+b;
}
const result= add(10,5);
console.log(result);
console.log(add(20,30));
console.log(add(5,5));
function Gre(name="stranger"){
    console.log(`hello ${name}`);
}
Gre("Sobit");
Gre();
function add(a,b){
    return a+b;
}
const add2 =(a,b) => {
    return a+b;
}
const add3 =(a,b) => a+b;
console.log(add(10,5));
console.log(add2(10,5));
console.log(add3(10,5));
// area of rectangle
function area(l,b){
    return l*b;
}
console.log(area(5,10));
// even or odd
function num(n){
if (n%2==0){
    console.log("even");
}
else{
    console.log("odd");
}
}
num(10);
// max of two number
 function numm(first,second){
    if(first> second){
        console.log(first);
    }
    else{
        console.log(second);
    }
}
    numm(15,25);
    // celsius to fahrenheit
    function temperature(celsius){
    return celsius*9/5+32;
}
 console.log(temperature(50));
// positve or neg
function no(x){
    if(x<0){
        console.log("neg");
    }
    else{
        console.log("pos");
    }
}
    no(5);

