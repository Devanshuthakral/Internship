 // Objects


let person = {
    name:"Devanshu",
    age:18,
    profession: "developer",
    skills: ["HTML","CSS","JS"]
}

console.log(person);
console.log(person.skills);

console.log(person["profession"]);


//arithmetic operators
// +,-,*, /, **
console.log(Math.pow(2,5)); //2^5
console.log(2**5); //2^5
console.log(Math.sqrt(4));

//assignment operators


//conditional operators
let a = 10;
let b = "10";
if(b==a){
    console.log(true);
}

if(a==b || b==a){
    console.log(true);
}

if(a==b && b==a){
    console.log(true);
}

if((a===b || b ==a) || (a === b && b==a)){
    console.log(true);
}
else{
    console.log(false);
}

if((a===b || b ==a) || (a === b && b==a) &&  (a==b)){
    console.log("true");
}
else{
    console.log("false");
}

//ternary operator

(a===b?console.log("true statement"):console.log("false statement"));

let result = (a==b?"true":"false");
console.log(result);

(a==b?a===b?console.log("a and b both are of same data types")
:console.log("a and b both are of diff data types")
:console.log("not equal"))

// loops

let arr = [1,2,3,4,5,6,7,8];
//for of loop
for(let element of arr){
    console.log(element)
}

for(let key in arr){
    console.log(key); // will print index
}
let person1 = {
    name:"Devanshu",
    age:18,
    profession: "developer",
    skills: ["HTML","CSS","JS"]
}
//for in loop 
for(const key in person1){
console.log(key,"->",person1[key])
}


// while(true){
//     console.log("while loop");
// }

function fun(){
    console.log("object")
}
console.log(fun());
