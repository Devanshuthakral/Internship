localStorage.setItem("name","alisha");//setitem se humne value set kr di

console.log(localStorage.getItem("name"));//getitem print krwa dega

// localStorage.setItem("obj",{name:"alisha"})//kisi bhi object ko directly is tareeke se nahi kr skte
// console.log(localStorage.getItem("obj"));

//object can not be stored directly in local storage
const obj={
    name:"alisha",
    arr:[1,2,3,"4"]
}
console.log(JSON.stringify(obj));//this is because it will convert into string
localStorage.setItem("obj",JSON.stringify(obj));
console.log("storage - ",localStorage.getItem("obj"));

//json.pass se string se original object main change kr dega
let storedObj=JSON.parse(localStorage.getItem("obj"));
console.log(storedObj);

// const getQR=async(url)=>{
//     let res=await axios.get(https://api.api-ninjas.com/v1/qrcode?format=png&data=https://api-ninjas.com
// )
// }