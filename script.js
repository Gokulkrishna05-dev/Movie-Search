let key = "2809d72"
let input = document.getElementById("input")
let result = document.getElementById("result")
let svg=document.getElementById("svg")
let error=document.getElementById("error")
result.style.display="none"
function search() {
    if(input.value==""){
        alert("Enter Movie Name")
    }
    else{
    result.style.display="flex"
    svg.style.display="none"
     error.style.display="none"
    let val = input.value
    result.innerHTML = ""
    input.value = ""
    fetch(`https://www.omdbapi.com/?t=${val}&apikey=${key}`)
        .then((val) => {
            return val.json()
        }).then((val) => {
           if(val.Response=="True"){
            create(val)
           console.log(val)
           }
           else{
            result.style.display="none"
            error.style.display="block"
             console.log(val)
           }
        })
}
}

function create(val) {
    // Creating Elements
    let img_div = document.createElement("div")
    let img = document.createElement("img")
    let text_div = document.createElement("div")
    let title = document.createElement("h1")
    let year = document.createElement("span")
    let ratings = document.createElement("span")
    let date = document.createElement("span")
    let genre = document.createElement("div")
    let writers = document.createElement("div")
    let actors = document.createElement("div")
    let plot = document.createElement("div")
    let language = document.createElement("div")
    let award = document.createElement("div")
    let div = document.createElement("div")

    // Adding Content
    img.src = val.Poster
    title.textContent = val.Title
    title.style.color="rgb(255, 196, 0)";
    year.textContent = "Year: " + val.Year
    ratings.textContent = "imdbRating: " + val.imdbRating
    ratings.style.color="rgb(255, 196, 0)";
    date.textContent = "Released: " + val.Released
    genre.textContent = "Genre: " + val.Genre
    writers.textContent = "Writer: " + val.Writer
    actors.textContent = "Actors: " + val.Actors
    plot.textContent = "Plot: " + val.Plot
    language.textContent = "Language: " + val.Language
    award.textContent = "Awards: " + val.Awards
    if(award.textContent=="Awards: N/A"){
         award.style.backgroundColor="none";
         award.style.color="white";
    }
    else{
    award.style.backgroundColor="rgb(255, 196, 0)";
    award.style.color="rgb(0, 0, 0)";
    award.style.width="fit-content";
    award.style.padding="9px";
    award.style.borderRadius="20px";
    }

    // Appends

    div.appendChild(title)
    div.appendChild(year)
    div.appendChild(ratings)
    div.appendChild(date)
    div.appendChild(genre)
    div.appendChild(writers)
    div.appendChild(actors)
    div.appendChild(plot)
    div.appendChild(language)
    div.appendChild(award)
    img_div.append(img)
    text_div.append(div)
    result.append(img_div)
    result.append(text_div)

    // Classes
    div.classList.add("div")
    text_div.classList.add("text")
    img_div.classList.add("img-div")

  
}