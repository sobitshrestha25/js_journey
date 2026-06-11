let student={
    name: "Sobit",
    age: 20,
    college: "TU",
    semester:4,
    isBCA: true,
}
console.log(student);
console.log(student.name);
console.log(student.semester);
   //dot notation and bracket notation dot commonly used bracketing notation used but only when we diont know property name ahead of the given timeframe..
   let studennt={
    name: "Sobit",
    age: 20,
    college: "TU",
    semester:4,
    isBCA: true,
}
console.log(studennt.name);
console.log(studennt["name"]);
let key= "college";
console.log(studennt[key]);
//add update and delete properties
let stu ={
    name: "Sobit",
    age: 20,
    college: "TU"
};
//add
stu.city ="Ktm";
console.log(stu);
//update
stu.age=21;
console.log(stu);
//delete property
delete stu.college;
console.log(stu);

//method inside obj
let s={
    name: "Sobit",
    age: 20,
    college: "TU",
    introduce:function(){
        console.log(`I am ${this.name} from ${this.college}`);
    }
};
s.introduce();

//for..in loop
let st={
    name: "Sobit",
    age: 22,
    college: "TU",
    sem: 4,
};
for (let key in student ){
    console.log(`${key}: ${student[key]}`);
}

//destructuring
let stud={
    name: "Sobit",
    age:  20,
    college: "Tu",
    sem: 4,
};
const {name,age,college} = stud;
console.log(name);
console.log(age);
console.log(college);

//spread with object: when we want to change the user settings then we spread the old settings and then we change the only one property.. similary it also helps to copy one objevt ionto anthr with arrays
let studd= {
    name: "Sobit",
    age: 22,
    college: "TU",
};
let updatedstudd ={...studd,age:21,city:"POkhara"};
console.log(studd);
console.log(updatedstudd);
//nested object
let bi= {
    name: "Sobit",
    age: 20,
    address:{
        city: "ktm",
        district: "bagmati",
        country: "nepal",
    }
};
console.log(bi.address.city);
console.log(bi.address.country);