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
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag){
        //console.log("submiting")

        const element = document.createElement('article');

        // add id
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        
        // add class
        element.classList.add('grocery-item');

        // change innerHtml
        element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

        // event listeners for both buttons on new items
        const deleteBtn = element.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteItem);
        const editBtn = element.querySelector(".edit-btn");
        editBtn.addEventListener("click", editItem);


        displayAlert("added item to list", "success");
        container.classList.add("show-container");

        // almost done

    }
    else if (value && editFlag){
        //console.log("editing")

        editElement.innerHTML = value;
        displayAlert("value changed", "success");

    }
    else{
        displayAlert("Please enter value", "danger");
    }

}


function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
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
