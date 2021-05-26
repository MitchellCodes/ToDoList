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
    var themeToggle = document.getElementById("dark-theme-toggle");
    themeToggle.onclick = toggleDarkTheme;
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
    itemDiv.classList.add("incompleted");
    itemDiv.onclick = markAsComplete;
    var taskTitle = document.createElement("h2");
    taskTitle.innerText = item.title;
    itemDiv.appendChild(taskTitle);
    var taskDeadline = document.createElement("p");
    taskDeadline.innerText = item.deadline.toDateString();
    itemDiv.appendChild(taskDeadline);
    incompleteDisplay.appendChild(itemDiv);
}
function markAsComplete() {
    var itemDiv = this;
    if (itemDiv.classList.contains("incompleted")) {
        itemDiv.classList.remove("incompleted");
        itemDiv.classList.add("completed");
        var completedItems = document.getElementById("complete-items");
        completedItems.appendChild(itemDiv);
    }
    else {
        itemDiv.classList.remove("completed");
        itemDiv.classList.add("incompleted");
        var incompletedItems = document.getElementById("incomplete-items");
        incompletedItems.appendChild(itemDiv);
    }
}
function toggleDarkTheme() {
    var themeDiv = this;
    var pageBody = document.getElementById("body");
    if (themeDiv.classList.contains("off")) {
        themeDiv.classList.remove("off");
        themeDiv.classList.add("on");
        pageBody.classList.remove("dark-theme-disabled");
        pageBody.classList.add("dark-theme-enabled");
    }
    else {
        themeDiv.classList.remove("on");
        themeDiv.classList.add("off");
        pageBody.classList.remove("dark-theme-enabled");
        pageBody.classList.add("dark-theme-disabled");
    }
}
