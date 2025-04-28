const elementBtn = document.getElementById("btn")
console.log(elementBtn)

const imgElement = document.getElementById("lampadina")
console.log(imgElement)


elementBtn.addEventListener("click", function(){
    imgElement.src = "./img/yellow_lamp 1.png";
    elementBtn.innerText = "Accesa!";
    elementBtn.style.backgroundColor = "yellow";
    console.log("Si accende l'idea!");
    
})