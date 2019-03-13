

// buttons clicked
var buttons = document.getElementsByClassName("button");
for (var i =0 ; i<buttons.length ; i++){
    buttons[i].onclick = function(){
        this.classList.add("buttonClicked");
    };
};


// exercise 1 - show date
document.getElementById("button1").onclick = function displayDate() {
    let d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let stringDate ="Today is " + months[d.getMonth()] + " " + d.getFullYear() + ", " +  days[d.getDay()] + " " + d.getHours() + ":" + d.getMinutes() ;
    let date = document.getElementById("date");
    // let button = document.getElementById('button1');
    // button.classList.add("buttonClicked");
    date.innerHTML = stringDate;
};

// exercise 2 - print page
document.getElementById("button2").onclick = function print_current_page(){
    window.print();
};


// exercise 3 - show random number from 1 to 100
document.getElementById("button3").onclick = function show_random_number(){
    let x = Math.floor((Math.random()*100)+1);
    document.getElementById("button3_p").innerHTML = x;
};


// exercise 4 - Guess the number between 1 and 5
document.getElementById("button4").onclick = function () {
    const num = Math.floor((Math.random()*5) +1);
    const guessNum = prompt("Guess a number between 1 and 5");
        if (num==guessNum)
        alert('you are right!');
        else
        alert('you are wrong... the number was '+ num );
};


// exercise 5 - JSON and AJAX request
let button5 = document.getElementById("button5");
button5.addEventListener("click", function(){

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function() {
        let ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
    };
    ourRequest.send();
});

// document.getElementsByClassName("button").onclick = function pink(){
//     let b = document.getElementsByClassName("button");
//     for (var i =0 ; i<b.length;i++){
//         console.log(b[i].innerHTML);
//         b[i].classList.add('buttonClicked');
//     }
// };




// function myFunction() {
//     var element = document.getElementById("myDIV");
//     element.classList.add("mystyle");
//   }



//all buttons clicked
// let button = document.getElementsByTagName("button");
// button.classList.add("buttonClicked");

// document.getElementsByTagName("P")[0].innerHTML = "Hello World!";

// function buttonClicked() {
//     let b = document.getElementsByClassName("button");
//     b.classList.add("buttonClicked");
// };





