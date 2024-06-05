var num1= Math.floor(Math.random()* 6) +1;


var image1= "images/dice"+ num1+ ".png";
    // var image1= `images/dice${num1}.png`;
document.querySelector("#left").setAttribute("src", image1);

// var num1= Math.floor(Math.random()* 6)+ 1;
//     var img= `images/dice${num1}.png`
//     document.querySelector("#left").setAttribute("src", img);


// var num2= Math.floor(Math.random()* 6) +1;
// var image2= "image/dice"+ num2+ ".png";
// document.querySelector("#right").setAttribute("src", image2);
var num2= Math.floor(Math.random()* 6)+ 1;
    var img= `images/dice${num2}.png`
    document.querySelector("#right").setAttribute("src", img);


if(num1> num2){
    document.querySelector("h1").innerHTML= "Player 1 Won!!"
}
else if(num1< num2){
    document.querySelector("h1").innerHTML= "Player 2 Won!!"
}
else{
    document.querySelector("h1").innerHTML= "It's a tie...."

}























//This was the orginal code and the above code works exactly the same but that is for practice.

// button = document.querySelector('input');
// button.addEventListener('click', updateButton);
// function updateButton() {
//     var player1= Math.floor(Math.random()* 6)+ 1;
//     var img= `images/dice${player1}.png`
//     document.querySelector("#left").setAttribute("src", img);

//     var player2= Math.floor(Math.random()* 6)+ 1;
//     var img= `images/dice${player2}.png`
//     document.querySelector("#right").setAttribute("src", img);

//     if (player1> player2) {
//         // document.querySelector("#left").innerHTML= scr= The Dicee Game/images.dice
//         document.querySelector("h1").innerText= "Player 1 won";
//     } 
//     else if(player1< player2){
//         document.querySelector("h1").innerText= "Player 2 won";
//     }
//     else{
//         document.querySelector("h1").innerText= "Its a draw";
//     }
// }