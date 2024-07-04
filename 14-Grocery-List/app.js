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

        list.appendChild(element);

        displayAlert("added item to list", "success");

        container.classList.add("show-container");

        addToLocalStorage(id, value);

        setBackToDefault();
    }

    else if (value && editFlag){
        //console.log("editing")

        editElement.innerHTML = value;
        displayAlert("value changed", "success");

        editLocalStorage(editID, value);
        setBackToDefault();

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
  const items = document.querySelectorAll('.grocery-item');
  if (items.length > 0){
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  localStorage.removeItem('list');
  setBackToDefault();
}


function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   const id = element.dataset.id;
   list.removeChild(element);
   if (list.children.length === 0){
    container.classList.remove("show-container");
   }
   displayAlert("item removed", "danger");
   setBackToDefault();

   removeFromLocalStorage(id);
}

function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;

  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

function setBackToDefault(){
  grocery.value = "";
  editFlag = false;
  editID = '';
  submitBtn.textContent = "submit";
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
