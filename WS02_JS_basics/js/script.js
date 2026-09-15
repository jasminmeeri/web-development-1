// Step 1

console.log("Hello World!"); 

// Step 2

const userName = "Jasmin";
const favoriteAnimal = "hamster";

console.log("My name is " + userName);
console.log("and my favorite animal is " + favoriteAnimal + ".");

// Step 3

const visitorName = prompt("What is your name?");
console.log("Hello, " + visitorName + "! Welcome to learn JavaScript with me!");

// Step 4

const visitorAge = prompt("How old are you?");
if (visitorAge < 18) {
    console.log("You are under 18.");
} else {
    console.log("You are an adult.");
}

// Step 5 

function greetUser(name) {
    console.log("Hello, " + name + "! It is nice to meet you.");
}

greetUser("Jasmin");
greetUser("Nick");
greetUser("Alex");

// Step 6

const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    alert("Button clicked! Everything seems to be working!");
});
