//higher order functions and callback functions

function helper(){

    console.log("helper function is executing...");

    return 10;

}



function higherorder(fun){

    console.log("higher order executing....");

    let res=fun();

    // return res;

    return +(res)+5;

}



// let result=higherorder(helper);

// console.log(result);



// let result2=higherorder(function(){//name not given to fun known as anonymous function->isme paas krte time hi ek fun create kr diya

//     console.log("this is anonymous function");

//     return "20";    

// })

// console.log(result2)





//()=>{}

let result2=higherorder(()=>{

    console.log("this is anonymous function");

    return "20";    

})

console.log(result2)



//call back function

function cb(a,b){

    console.log("call back executing");

    return a+b;

}



function parent(a,b,fun){

    console.log("higher order executing...");

    let sum=a+b;

    // let result=fun(sum,20);

    // return result;

    return fun(sum,20);

}

let ans2=parent(10,20,cb);

console.log(ans2);



let arr=[1,2,3,4,5,6];



function square(num){

    return num*num;

    //  return num**2;

}



function cube(num){

    return num**3;

}



function ArrConverter(array,fun){

    let ar=[];

    for(let element of arr){

        let powVal=fun(element)

        ar.push(powVal);

    }

    return ar;

}



let sqArr=ArrConverter(arr,square);
console.log(sqArr);

let cubeArr = ArrConverter(arr,cube);
console.log(cubeArr);


function cb(x){
    console.log("callback function",x);
    return function(y){
        console.log("inner funcion",y);
        return x+ y ;

    };
}
function higher(callback){
    console.log("higher order function");
    let innerfunc = callback(5);
    console.log("this is below call");
    return innerfunc(10);
}
console.log(higher(cb)); //sbse pehle higher function

function cb(x){
    console.log("callback function",x);
    if(x>10){
        return "Greater than 10";
    }else{
        return "less than or equal to 10";
    }
}
function higher(callback,value){
    console.log("higher order function");
    let ans=callback(value);
    console.log("this is below call");
    return ans;
}
console.log(higher(cb,12));
console.log(higher(cb,8));


function cb(){
    console.log("callback function");
    return function(){
        console.log("inner function 1");
        return function(){
            console.log("inner function 2");
            return "final return";
        };
    };
}
function higher(callback){
    console.log("higher order function");
    let innerFunc1=callback();
    console.log("this is below call 1");
    let innerFunc2=innerFunc1();
    console.log("this is below call 2");
    return innerFunc2();
}
console.log(higher(cb));