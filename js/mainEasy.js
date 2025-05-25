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
    alert ("Pense à compléter ta liste avant de partir!");
} else {
    createToDoItem(inputValue, 1);

    toDoInput.value = "";
    toDoInput.focus();
       }
}

function createToDoItem(inputValue){

let NewItem = document.createElement("li");
NewItem.textContent = inputValue;
NewItem.classList.add("toDo-item");

let itemQuantity = 1;
let quantity = document.createElement("span");
quantity.classList.add("quantity");
quantity.textContent = ` x${itemQuantity}`;
quantity.style.display = itemQuantity > 1 ? "inline" : "none"; 
NewItem.appendChild(quantity);

   let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    NewItem.appendChild(buttonContainer);

   let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#8722;";
    deleteButton.classList.add("delete-btn");
    buttonContainer.appendChild(deleteButton);

    deleteButton.addEventListener("click",function () {
        deleteQuantity(NewItem, quantity);
    });

   let addButton = document.createElement("button");
    addButton.innerHTML = "&#43;";
    addButton.classList.add("add-btn");
    buttonContainer.appendChild(addButton);

    addButton.addEventListener("click", function () {
        addQuantity(NewItem, quantity);
    });

    let removeButton = document.createElement("button");
    removeButton.innerHTML = "&#128465;";
    removeButton.classList.add("remove-btn");
    buttonContainer.appendChild(removeButton);
    
    removeButton.addEventListener("click", function () {
        ToDoList.removeChild(NewItem);
    });


ToDoList.appendChild(NewItem);
}


function deleteQuantity(NewItem, quantity) {
    let currentQuantity = parseInt(quantity.innerText.replace("x", ""));
   if (currentQuantity > 1) {
        currentQuantity--;
        quantity.innerText = ` x${currentQuantity}`; 
        quantity.style.display = currentQuantity > 1 ? "inline" : "none";
      } else {
        ToDoList.removeChild(NewItem);
}
}

function addQuantity(NewItem, quantity) {
let currentQuantity = parseInt(quantity.innerText.replace("x", ""));
currentQuantity++;
quantity.innerText = ` x${currentQuantity}`;
quantity.style.display ="inline";

}
    