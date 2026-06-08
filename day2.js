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

//reverse 
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));
//palindrome
function isPalindromeShort(str) {
    // Reverse the string and compare it to the original
    return str === str.split('').reverse().join('');
}

console.log(isPalindromeShort("madam")); 
//area of circle
function area(r){
return 3.14*r*r;
}
console.log(area(25));
//percentage
function percentage(m,t){
    return (m/t)*100;
}
console.log(percentage(32,100));
//minimum of three number
function num(a,b,c){
    if(a<b && a<c){
        console.log(a)
    } else if(b<a && b<c){
        console.log(b);
    }
    else{
        console.log(c);
    }
}
    num(3,4,5);
    


