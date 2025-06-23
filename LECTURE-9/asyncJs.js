

// setTimeout(()=>{
//     console.log("hits comes after 2s")
// },2000) //runs the callback function after 2000ms(2seC).

// const callBack = ()=>{
//     console.log("this is callback function");
// }
// setTimeout(callBack,1000); // runs the callback function after 1000ms (1sec).

// // setInterval(()=>{
// //     console.log("this function is running every 3s");
// // },3000)

// const id = setInterval(()=>{
//     console.log("this function is running in every 3s");
// },3000)

// // clearInterval(id)

// setTimeout(()=>{
// clearInterval(id);
// },3000*4)


let b = 10;

setTimeout(()=>{
    console.log("this is inner cb")
})

//promise 

const mypromise = new Promise((resolve,reject)=>{
 let num = Math.random()*10
 if(num<5){
    resolve(num)
 }
 else{
    reject(num)
 }
})

mypromise.then((data)=>{
    console.log("promise resolved",data);
}).catch((error)=>{
    console.log("promise rejected",error);
});
console.log(b)

const newMyPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("this is a promise which is resolved after 2s");
        resolve();
    },2000)
})


newMyPromise.then(()=>{
    console.log("promise resolved");
})
console.log(newMyPromise)

const chainPromise = new Promise((resolve,reject)=>{
    let num = Math.random()*100
    if(num<50){
        resolve(num)
    }
    else{
        reject(num)
    }
})


chainPromise.then((data)=>{
    if(data<25){
        return `num is less than 25 ${data}`
    }else{
        return `num is greater than 25 ${data}`
    }
}).then((dta)=>{
    console.log(dta);
}).catch(()=>{console.log("object");})


//async functions 
let a = 10;
async function fun(){
console.log("async functions")
}
let result;
const arrowFun = async () =>{

    console.log("async arrow function");
    let res = await fetch("https://randomuser.me/api/"); // some api call
    result =  await res.json();
    console.log(result);
    console.log("async arrow function end");
}

fun();
arrowFun();
console.log(result);
console.log(a);