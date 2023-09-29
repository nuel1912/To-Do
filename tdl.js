//Code for To-Do List...
var user = document.getElementById("user"); //Gets ID of the input field...
var todo = document.getElementById("todo"); //Gets the ID of the button - To-Do
var ul = document.querySelector("ul"); //Gets the ul (unordered list) tag...

//A function that returns the length of the user input...
function userLength() {
    return user.value.length;
}

//A function to create a new list item...
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(user.value));
    ul.appendChild(li);
    user.value = "";

    //For the delete button...
    var buttoon = document.createElement("button");
    buttoon.innerHTML = "\u00d7";
    li.appendChild(buttoon);
}

//A function to add a new list item after clicking on the button...
function addListAfterClick() {
    if (userLength() > 0) {
        createListElement();
    } else {
        alert("Add a task...");
    }
}

//A function to add a new list item after pressing the enter key...
function addListAfterPress(e) {
    //Character code for "enter' key is 13...
    if (userLength() > 0 && e.charCode === 13) {
        createListElement();
    }
}

todo.addEventListener("click", addListAfterClick); //If a user clicks on the button, call the function...

user.addEventListener("keypress", addListAfterPress); //If a user presses enter on the keyboard, call the function...

//A function to check or highlight done tasks and also to delete tasks...
ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}); 


//A function that gets the user's name and replaces To-Do List at the top...
function hello() {
    let name = prompt("What's your name?");

    if (name === "") {
        document.getElementById("hello").textContent = "Your To-Do List"
    } else {
        document.getElementById("hello").textContent = `${name}'s To-Do List`;
    }
}


//Yeahhh, testimg objects and passing it into a function...
function pass() {
    let person = {
        names: prompt("Your name?"),
        age: prompt("Your age?"),
        gender: prompt("Your gender?"),
        favouriteColor: prompt("Your favourite color?")
    }
    
    alert(`So your name is ${person.names} and you're ${person.age} years old being of ${person.gender} gender and ${person.favouriteColor} being your favourite color`);
}

// pass();