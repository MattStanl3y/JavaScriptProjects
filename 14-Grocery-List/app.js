// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener("submit", addItem);

// clear btn;
clearBtn.addEventListener("click", clearItems);

// display items onload
window.addEventListener("DOMContentLoaded", setupItems);


// ****** FUNCTIONS **********

function addItem(e){


    // even listeners for both buttons on new items
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);

}


function displayAlert(text, action){

}

function clearItems(){

}


function deleteItem(e){

}

function editItem(e){

}

function setBackToDefault(){

}


// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value){

}

function getLocalStorage(){

}

function removeFromLocalStorage(id){

}

function editLocalStorage(id, value){

}


// ****** SETUP ITEMS **********

function setupItems(){

}

function createListItem(id, value){

}
