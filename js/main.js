"use-strict";

const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Declaring the array of image filenames */
const images = ["picture01.png", "picture02.png", "picture03.png", "picture04.png", "picture05.png"];

// Declaring the alternative text for each image file */
const alternativeTexts = ["Ada Lovelace", "John von Neumann", "Alan Turing", "Margaret Hamilton", "Donald Knuth"];

// Looping through images 
for(let i = 0; i < 5; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "./assets/imgs/" + images[i]);
    newImage.setAttribute("alt", alternativeTexts[i]);
    thumbBar.appendChild(newImage);    
}

// Wiring up the Darkn/Lighten button
