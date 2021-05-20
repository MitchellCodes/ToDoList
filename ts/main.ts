// @ts-ignore: Ignoring issue with js-datepicker lacking intellisense
const picker = datepicker("#deadline")
picker.setMin(new Date()); // Set the earliest date available to today

class ToDoItem{
    title:string;
    deadline:Date;
    isCompleted:boolean;

    constructor(title:string){
        this.title = title;
    }
}

window.onload = function(){
    let addButton = <HTMLElement>document.querySelector("input[type=button]");
    addButton.onclick = isValid;
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

}

/**
 * Display given ToDoItem on the webpage
 * @param item The ToDoItem to display
 */
function displayToDoItem(item:ToDoItem):void{

}

// TASK: Allow user to mark ToDoItem as completed
// TASK: Store ToDoItems in web storage