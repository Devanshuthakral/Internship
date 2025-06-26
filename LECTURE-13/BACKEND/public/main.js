const btnContainer = document.getElementById("btn-container")

const form = document.getElementById("task");
const container = document.getElementById("container");
const clearbtn = document.getElementById("clearbtn");

clearbtn.addEventListener("click",async ()=>{
    let res= await axios.delete("http://localhost:4444/clear-complete");
    renderTodos(res.data.Todos);
})

container.addEventListener("click",async(e)=>{
    console.log(e.target.parentElement)
    if(e.target.id=="delete"){
        const id = e.target.parentElement.id;
        const res = await axios.delete(`http://localhost:4444/todo/${id}`)
        renderTodos(res.data.Todos)
    }

        if(e.target.id="complete"){
        const id = e.target.parentElement.id;
        const res = await axios.put(`http://localhost:4444/todo/${id}`)
        renderTodos(res.data.Todos)
    }
})
form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const task = e.target.children[0].value;
    if(task.trim().length==0){
        alert("Please enter valid task");
        return;
    }


    let result = await axios.post("http://localhost:4444/add-todo",{task:task});
     e.target.children[0].value="";
    renderTodos(result.data.Todos);

})


function renderTodos(todos){
    container.innerHTML="";
    for(let todo of todos){
        let div=document.createElement("div");

        div.className = "flex w-full justify-between border p-2 rounded-md"
        div.innerHTML=`${todo.task} <div id="${todo.id}" class="flex gap-2">
        <button id="complete" class="bg-green-500 px-3 py-1">
        ${todo.completed?"Undo":"Completed"}</button>
        <button id="delete"class="bg-red-500 px-3 py-1">Deleted</button>
         </div>`
         container.append(div);
    }
    
}

    

async function getAllTodos(){
    let res = await axios.get("http://localhost:4444/all-todos");
    renderTodos(res.data.Todos)
} 

getAllTodos();

btnContainer.addEventListener("click",(e)=>{
    if(e.target.id="active" || e.target.id=="all" || e.target.id=="completed"){
        for(let btn of btnContainer.children){
       
            btn.classList.remove("bg-green-500")
            btn.classList.remove("text-white")


        };
        e.target.classList.add("bg-green-500");
        e.target.classList.add("bg-green-500");

}
});