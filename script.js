const buttons = document.querySelectorAll(".tile");
const buttonName=document.querySelector(".buttonName");
console.log(buttons);

buttonName.innerHTML="Social media";

function mouseEnteredButton(e){
    e.preventDefault();
    var name=this.getAttribute("name");
    buttonName.innerHTML=name;
}
function mouseLeftButton(e){
    buttonName.innerHTML="Social media";
}


buttons.forEach(button => button.addEventListener("mouseenter",mouseEnteredButton));
buttons.forEach(button => button.addEventListener("mouseleave",mouseLeftButton));
