/* LESSON 3 - Programming Tasks */

// Declare a new object literal variable named myProfile and assign an empty object to it
let myProfile = {};

// Add a property named name and set its value to your name as a string
myProfile.name = "Eseoghene Gbunoghene";

// Add a property named photo and set its value to an image's path and name
myProfile.photo = "images/ese.jpg";

// Add a property named favoriteFoods and set its value to an array of your favorite foods as strings
myProfile.favoriteFoods = ["Starch and Banga Soup", "Jollof Rice and Assorted Meat", "Semo and Egusi Soup"];

// Add a property named hobbies and set its value to an array of your hobbies as strings
myProfile.hobbies = ["Learning anything Tech", "Time out with family", "Surfing the net"];

// Add a property named placesLived and set its value to be an empty array
myProfile.placesLived = [];

// Add an item to the placesLived array, which is an object with two properties: place and length
myProfile.placesLived.push({ place: "Ebute-Metta", length: "15 years" });

// Add additional object literals to the placesLived array for each place you have lived
myProfile.placesLived.push({ place: "Okota", length: "15 years" });


// Assign the value of the name property of the myProfile object to the HTML element with an ID of name
document.getElementById("name").textContent = myProfile.name;

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo
document.getElementById("photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo
document.getElementById("photo").alt = myProfile.name;

// Use a forEach loop to iterate over the favoriteFoods array and create an HTML <li> element for each food
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.getElementById("favorite-foods").appendChild(li);
});

// Repeat the same process for the hobbies property
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.getElementById("hobbies").appendChild(li);
});

// For each object in the placesLived property, create <dt> and <dd> elements and append them to the <dl> element
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.getElementById("places-lived").appendChild(dt);
    document.getElementById("places-lived").appendChild(dd);
});