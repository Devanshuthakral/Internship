function fun(){
    console.log("object")
    return 5;
}


let result = fun();
// console.log(result);
console.log(fun());

//function can return anything;


function fun2(){
    return 10+20;
}
console.log(fun2())

function sum(a,b){
    return a+b;
}
let ans= sum(100,400);
let ans1 = sum(b=100,c=400);
console.log(ans);

//default arguments
function fun(a=0,b=0,c=0){
    return a+b+c;
}
let res = fun(1,2,7);
console.log(res);

function fun4(){
    return {
        name:"hello",
        work:"nothing"
    }
}
console.log(fun4());

// arrow function

let arrowFun = () => {
    console.log("this is arrow function");
    return "return from arrow function"
}
arrowFun()

let arrowfun2 = (a,b) => {
    console.log("this is arrow functions");
    return a+b;
}

// 

function fun5(a,b){
 return a+b+c;
}
function fun5(a,b,c){
    return a+b+c;
}
function fun5(a,b,c,d){
    return a+b+c+d
}
res = fun(2,3,4,5);
res=fun5(2,3,4);
console.log(res)