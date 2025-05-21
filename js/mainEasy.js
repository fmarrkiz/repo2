"use strict"

let toDoInput = document.querySelector(".toDoInput") ;
let toDoButton = document.querySelector(".toDoButton");
let ToDoList = document.querySelector(".ToDoList");


toDoButton.addEventListener("click", addToDoTask);
toDoInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addToDoTask(e);
    }
}
); 
  


function addToDoTask (event) {
event.preventDefault();

let inputValue = toDoInput.value.trim();
if (inputValue === "") {
    alert ("Pense à vérifier ta liste avant de partir!");
} else {
    
    let NewItem = document.createElement("li");
    NewItem.innerText = inputValue;
    NewItem.classList.add("toDo-item");
    ToDoList.appendChild(NewItem);
    
    let TaskQuantity = 1;
    let quantity = document.createElement("span");
    quantity.classList.add("quantity");
    quantity.innerText = `x${TaskQuantity}`;
    quantity.style.display ="none";
    NewItem.appendChild(quantity);

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    NewItem.appendChild(buttonContainer);

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#8722;";
    deleteButton.classList.add("delete-btn");
    buttonContainer.appendChild(deleteButton);

    let addButton = document.createElement("button");
    addButton.innerHTML = "&#43;";
    addButton.classList.add("add-btn");
    buttonContainer.appendChild(addButton);

    deleteButton.addEventListener("click",function () {
        deleteQuantity(NewItem, quantity);
    });

    addButton.addEventListener("click", function () {
        addQuantity(NewItem, quantity);
    });

    toDoInput.value = "";
    toDoInput.focus();
       }
} 

function deleteQuantity(NewItem, quantity) {
    let currentQuantity = parseInt(quantity.innerText.replace("x", ""));
   if (currentQuantity > 1) {
        currentQuantity--;
        quantity.innerText = `x${currentQuantity}`; 
      } else {
        ToDoList.removeChild(NewItem);
}
}

function addQuantity(NewItem, quantity) {
let currentQuantity = parseInt(quantity.innerText.replace("x", ""));
currentQuantity++;
quantity.innerText = `x${currentQuantity}`;
quantity.style.display ="inline";

}
    

