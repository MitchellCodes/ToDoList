// @ts-ignore: Ignoring issue with js-datepicker lacking intellisense
const picker = datepicker("#deadline")
picker.setMin(new Date()); // Set the earliest date available to today

class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;
}

window.onload = function(){
    let addButton = <HTMLElement>document.querySelector("input[type=button]");
    addButton.onclick = main;
}

function main():void{
    if (isValid()) {
        let newItem = getToDoItem();
        displayToDoItem(newItem);
    }
}

/**
 * Check if form data is valid.
 * @returns Returns true if the form data is valid.
 */
function isValid():boolean{
    let isTitleValid = true;
    let isDeadlineValid = true;
    let titleErrorSpan = <HTMLSpanElement>document.getElementById("title-error");
    let deadlineErrorSpan = <HTMLSpanElement>document.getElementById("deadline-error");

    // reset error messages
    titleErrorSpan.innerText = "*";
    deadlineErrorSpan.innerText = "*";

    // test that title is not empty or whitespace
    let titleInput = (<HTMLInputElement>document.getElementById("title")).value;
    if (titleInput.trim() == "") {
        isTitleValid = false;
        titleErrorSpan.innerText = "Please enter a title for the task.";
    }

    // test that a date was entered
    let deadlineInput = (<HTMLInputElement>document.getElementById("deadline")).value;
    let inputDate = Date.parse(deadlineInput); // returns NaN if deadlineInput is not a date
    
    // deadline is invalid if the input is not a date
    // (still allows for dates in the past to be entered)
    if (isNaN(inputDate)) {
        isDeadlineValid = false;
        deadlineErrorSpan.innerText = "Please enter a deadline date.";
    }

    return isTitleValid && isDeadlineValid;
}

/**
 * Get all input data off form and wrap
 * in a ToDoItem object
 */
function getToDoItem():ToDoItem{
    let newTask = new ToDoItem();

    // fill newTask with data from the form
    newTask.title = (<HTMLInputElement>document.getElementById("title")).value;

    let dateString = (<HTMLInputElement>document.getElementById("deadline")).value;
    newTask.deadline = new Date(dateString);

    newTask.isCompleted = false;

    return newTask;
}

/**
 * Display given ToDoItem on the webpage.
 * @param item The ToDoItem to display.
 */
function displayToDoItem(item:ToDoItem):void{
    let incompleteDisplay = document.getElementById("incomplete-items");

    // create a <div class="todo"> to contain each item
    let itemDiv = document.createElement("div")
    itemDiv.classList.add("todo");
    itemDiv.classList.add("incompleted");

    itemDiv.onclick = markAsComplete;

    // create a <h2> with the task title,
    // a <p> with the deadline,
    // and add both to the div created above
    let taskTitle = document.createElement("h2");
    taskTitle.innerText = item.title;
    itemDiv.appendChild(taskTitle);

    let taskDeadline = document.createElement("p");
    taskDeadline.innerText = item.deadline.toDateString();
    itemDiv.appendChild(taskDeadline);

    // add itemDiv to <div id="incomplete-items">
    incompleteDisplay.appendChild(itemDiv);
}

function markAsComplete(){
    let itemDiv = <HTMLDivElement>this;

    if (itemDiv.classList.contains("incompleted")) {
        itemDiv.classList.remove("incompleted")
        itemDiv.classList.add("completed");

        let completedItems = document.getElementById("complete-items");
        completedItems.appendChild(itemDiv);
    }
    else {
        itemDiv.classList.remove("completed");
        itemDiv.classList.add("incompleted");

        let incompletedItems = document.getElementById("incomplete-items");
        incompletedItems.appendChild(itemDiv);
    }
}

// TASK: Store ToDoItems in web storage