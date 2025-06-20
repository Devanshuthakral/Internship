//map,filter,reduces,find,forEach,some
//async javascript -setTimeout,setInterval,Promise,async,await,
//api calling

let arr=[1,2,3,4,5,6,7,8,9,10];

function square(num){
    return num*num;
}
// let sqArr=arr.map(square);
// console.log(sqArr);


let sqArr=arr.map((num)=>{
    return num*num;
})
console.log(sqArr);


let sqArr1=arr.map((num)=>{
    return num**3;
})
console.log(sqArr1);


//filter -> to get specific element on the basis of condition 

function odd(num){
    return (num%2==1);
}

let oddArr = arr.filter(odd);
oddArr = arr.filter(function(num){
    return (num%2==1);
})
oddArr = arr.filter(odd);
oddArr = arr.filter(function(num)
    {
        return
    }
)