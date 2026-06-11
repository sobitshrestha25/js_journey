let marks =[78,45,32,90,55,12,67,88,23,49];
let passed = marks.filter(function (mark){
    return mark >=40;
});
//failed
let failed = marks.filter(function (mark){
    return mark <40;
});
//total
let total = marks.reduce(function (sum,mark){
    return sum+ mark;
},0);
//average
let average = total/ marks.length;
//print everything using template literals:
console.log(`Marks: ${marks}`);
console.log(`Passed marks: ${passed}`);
console.log(`Total marks: ${total}`);
console.log(`Average marks: ${average}`);