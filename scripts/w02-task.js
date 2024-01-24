/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
// let fullName = "Eseoghene Jacob Gbunoghene"

/* Step 3 - Element Variables */

/* Step 4 - Adding Content */

/* Step 5 - Array */
// -------------------------------------------------

let fullName = "Eseoghene Jacob Gbunoghene";
let currentYear = new Date().getFullYear();
let profilePicture = "images/ese.jpg";


const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
let imageElement = document.querySelector('img');


nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

let favoriteFoods = ["Jollof Rice", "Egusi and Semo"];
foodElement.textContent = favoriteFoods.join(", ");

let newFavoriteFood = "Starch and Banga Soup";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

favoriteFoods.shift();
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");

favoriteFoods.pop();
foodElement.innerHTML += "<br>" + favoriteFoods.join(", ");