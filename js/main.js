var picker = datepicker("#deadline");
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addButton = document.querySelector("input[type=button]");
    addButton.onclick = main;
};
function main() {
    if (isValid()) {
        var newItem = getToDoItem();
        displayToDoItem(newItem);
    }
}
function isValid() {
    var isTitleValid = true;
    var isDeadlineValid = true;
    var titleErrorSpan = document.getElementById("title-error");
    var deadlineErrorSpan = document.getElementById("deadline-error");
    titleErrorSpan.innerText = "*";
    deadlineErrorSpan.innerText = "*";
    var titleInput = document.getElementById("title").value;
    if (titleInput.trim() == "") {
        isTitleValid = false;
        titleErrorSpan.innerText = "Please enter a title for the task.";
    }
    var deadlineInput = document.getElementById("deadline").value;
    var inputDate = Date.parse(deadlineInput);
    if (isNaN(inputDate)) {
        isDeadlineValid = false;
        deadlineErrorSpan.innerText = "Please enter a deadline date.";
    }
    return isTitleValid && isDeadlineValid;
}
function getToDoItem() {
    var newTask = new ToDoItem();
    newTask.title = document.getElementById("title").value;
    var dateString = document.getElementById("deadline").value;
    newTask.deadline = new Date(dateString);
    newTask.isCompleted = false;
    return newTask;
}
function displayToDoItem(item) {
    var incompleteDisplay = document.getElementById("incomplete-items");
    var itemDiv = document.createElement("div");
    itemDiv.classList.add("todo");
    var taskTitle = document.createElement("h2");
    taskTitle.innerText = item.title;
    itemDiv.appendChild(taskTitle);
    var taskDeadline = document.createElement("p");
    taskDeadline.innerText = item.deadline.toDateString();
    itemDiv.appendChild(taskDeadline);
    incompleteDisplay.appendChild(itemDiv);
}
