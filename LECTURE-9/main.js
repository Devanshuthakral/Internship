let arr = [
    {
    name : "person 1",
    age : 20,
},
{
    name : "person 2",
    age : 17,
},
{
    name : "person 3",
    age : 18,
},
{
    name : "person 4",
    age : 19,
},
{
    name : "person 5",
    age : 23,
},
]

// // add a new key "id" & its value to every object

// let person = {
//     name: "person",
//     age:24,
//     skills:["js","react",]
// }

// let newperson = {
//     ...person,
//     profession : "dev",
//     home: "panipat"
// }

// console.log(newperson)

// let numArr = [1,2,3,4,5,6]
// let newnumarr = [...numArr,7,8,9,10];
// console.log(newnumarr)

arr = arr.map((obj,index)=>{
    return {
        ...obj,
        name:"changed name", //overwrite old key's value
        id: index+1, //new key & its value 
        salary : (index+1)*100000
    }
})

console.log(arr)


let newArr = arr.filter((person)=>{
    return (person.age >=18);
})

console.log(newArr)


let salarySum = arr.reduce((accum,person)=>{
    return accum+person.salary;
},0)
console.log(salarySum)

//find -> same as filter but return first matching element 

let result = arr.find((person)=>{
    return (person.age==18)
})
console.log(result)
result = arr.find((person)=>{
    return (person.age<18)
})
console.log(result)
let ar = [1,2,3,4,5,6,7];

let sum = ar.reduce((accum,num)=>{
    return num+accum
},0)

let mul = ar.reduce((accum,num)=>{
    return num*accum
},1)

let divide = ar.reduce((num,accum)=>{
    return num/accum
},1)

console.log(mul);
console.log(sum);
console.log(divide);

ar.forEach((ele)=>{
    console.log(ele);
});