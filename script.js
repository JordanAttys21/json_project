


for (let i = 0; i < randUsers.results.length; i++) {
   
let firstDiv = document.createElement("div")
let firstImg = document.createElement("img")
let firstTxt = document.createElement("p")

firstTxt.innerHTML = "Name: " + randUsers.results[i].name.first + " " + randUsers.results[i].name.last + "<br>" + "Email: " + randUsers.results[i].email;


firstImg.src = randUsers.results[i].picture.large;

firstDiv.appendChild(firstImg)
firstDiv.appendChild(firstTxt)
profiles.appendChild(firstDiv)

}
