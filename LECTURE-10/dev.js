const form = document.getElementById("search-form");

form.addEventListener("submit",async (e)=>{
    e.preventDefault(); //stops page reload
   let search =  e.target.children[0].value;
   let res = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=d9229ba`);
   localStorage.setItem("movies",JSON.stringify(res.data.Search))
   createCard()
})

const container = document.getElementById("container");

function createCard(){
let movies = JSON.parse(localStorage.getItem("movies"))
container.innerHTML=""
    movies.forEach(movie =>{
        const div = document.createElement("div");
        div.className ="card";
        const img = document.createElement("img");
        img.src = movie.Poster;
        img.class = "movie-banner";
        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
        
        div.prepend(img);
        container.append(div);
    });
}
        
if(localStorage.getItem("movies")){
    createCard();
}

localStorage.removeItem("name");
localStorage.removeItem("obj");
localStorage.removeItem("tasks")