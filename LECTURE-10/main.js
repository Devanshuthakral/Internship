

// const allParagraphs =document.getElementsByTagName("p")
// console.log(allParagraphs);
// console.log(allParagraphs[1].textContent);

// const classElement = document.getElementsByClassName("para")
// console.log(classElement);

// const singleElement = document.getElementById("head")
// console.log(singleElement);

// const elementbyquery = document.querySelector("p")
// const elementquery = document.querySelector(".para")
// const elementsbyque = document.querySelector("#head")

// console.log(elementbyquery);
// console.log(elementquery);
// console.log(elementsbyque);

// const elementsbyquery = document.querySelectorAll(".para2")
// console.log(elementsbyquery);

const container = document.getElementById("container");
// console.log(container.innerText);
// console.log(container.textContent);
// console.log(container.innerHTML);
// // container.innerText = "This is changed by Js.<h1>JS</h1>"
// // container.innerHTML = "This is changed by js.<h1>JS</h1>" //isme yei tag h1 ki heading mei show ho rha h 

// console.log(container.id,container.className)
// container.className = "background"
// container.setAttribute("id","containerbyjs");
// console.log(container.id);

// elementbyquery.classList.add("cl5");
// // elementbyquery.classList.remove("cl5")
// elementbyquery.classList.toggle("cl5"); // if class presemt then remove,if class is not prestent tham it is add it
// console.log(elementquery.children);
// console.log(container.children[1]); //para
// console.log(container.children[1].parentElement); // para paremnt i.e "div"
// console.log(container.children[1].nextElementSibling); // ARTICLE
// console.log(container.children[1].previousElementSibling); //span


// container.children[1].nextElementSibling.innerText = "this is changed by js"; //article
const val = "hello paragrpah";
const div = document.createElement("div"); //create element
div.className = "cl1 cl2";
div.id="dynaic-container";

// container.append(div);
container.prepend(div);

container.after(div); // push inside div at last +1 index
container.before(div); // push inside div at 0  index
div.innerHTML = `<p>${val}</p>  <p>${val}2</p>`;
console.log(div);
