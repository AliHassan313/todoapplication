function addItems(event) {

    event.preventDefault();
    const inputtext = document.getElementById("inputText").value;
    const itemList = document.createElement("li");
    itemList.className = 'taskList';
    document.getElementById("taskItem").appendChild(itemList);
    itemList.textContent = inputtext;
    document.getElementById("inputText").value = ' ';
    document.getElementById("inputText").focus();

    const deletebutton = document.createElement("button");

    deletebutton.textContent = "Done"
    deletebutton.className = "deleteButton"
    itemList.append(deletebutton);

    deletebutton.addEventListener("click", function(){
        deleteTask(itemList);
    })
    
}

function deleteTask (item) {
    item.remove();
}

