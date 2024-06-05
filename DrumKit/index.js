// document.querySelector("button").addEventListener("click", fun);

// function fun() {
//     alert("i detected a click");    
// }
 
// document.querySelector(".w").addEventListener("click", function(){
//     var audio= new Audio("sounds/tom-1.mp3");
//     audio.play();
// });
// document.querySelector(".a").addEventListener("click", function(){
//     var audio= new Audio("sounds/snare.mp3");
//     audio.play();
// });

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML= this.innerHTML;
        fun(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(){
    fun(event.key)
    buttonAnimation(event.key);
});

function fun(key){
    // var audio= new Audio("sounds/tom-1.mp3");
    // audio.play();
    // console.log(this.style.color= "black");

    if(key=== "w"){
        var audio= new Audio("sounds/crash.mp3");
        audio.play();
    }
    else if(key=== "a"){
        var audio= new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
    else if(key=== "s"){
        var audio= new Audio("sounds/snare.mp3");
        audio.play();
    }
    else if(key=== "d"){
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    else if(key=== "j"){
        var audio= new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    else if(this.innerHTML=== "k"){
        var audio= new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    else if(key=== "l"){
        var audio= new Audio("sounds/tom-4.mp3");
        audio.play();
    }
}

function buttonAnimation(key){
    var activeButton= document.querySelector("."+ key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
    activeButton.classList.remove("pressed");
    }, 100);
}