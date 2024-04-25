// to add sound with click.
let drums = document.querySelectorAll(".drum");
for(let i=0;i<drums.length;i++){
    drums[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

// to add sound with keydown with keyboard.
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// sound enable function.
function makeSound(key){
    switch(key){
        case ("w"):
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case ("a"):
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case ("s"):
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case ("d"):
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case ("j"):
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case ("k"):
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case ("l"):
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Invalid input!");
    }
}

function buttonAnimation(key){
    let target = document.querySelector("."+key);
    target.classList.add("pressed");

    setTimeout(function(){
        target.classList.remove("pressed");
    }, 100);
};