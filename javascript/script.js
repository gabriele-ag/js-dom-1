const elementBtn = document.getElementById("btn")
console.log(elementBtn)

const imgElement = document.getElementById("lampadina")
console.log(imgElement)

let lampadaAccesa = false;

elementBtn.addEventListener("click", function(){
    if (lampadaAccesa) {
        elementBtn.innerText = "Spenta"
        elementBtn.style.backgroundColor = ""
        imgElement.src = "./img/white_lamp 1.png"
        console.log("Spenta")
    } else {
        elementBtn.innerText = "Accesa!"
        elementBtn.style.backgroundColor = "yellow"
        imgElement.src = "./img/yellow_lamp 1.png"
        lampadaAccesa = true
        console.log("Si accende l'idea!")

    }
    
})