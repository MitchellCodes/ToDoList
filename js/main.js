var picker = datepicker("#deadline");
picker.setMin(new Date());
var ToDoItem = (function () {
    function ToDoItem(title) {
        this.title = title;
    }
    return ToDoItem;
}());
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
}
function displayToDoItem(item) {
}
