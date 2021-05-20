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

/**
 * Check if form data is valid
 */
function isValid():boolean{

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