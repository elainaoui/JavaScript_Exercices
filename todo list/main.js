/*
..students tasks:
..[1] use sweet alert if input empty
..[2] check if task Is Exist

*/

// setting up variables
let theInput = document.querySelector(".add-task input");
let TheAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let tasksCount = document.querySelector(".tasks-count span")
let tasksCompleted = document.querySelector(".tasks-completed span");

//focus on Input  field
window.onload = function () {
    theInput.focus();
};

//ading the task
TheAddButton.onclick = function () {
   // if input is empty
   if (theInput.value === '' ) {

    console.log("No value");

   } else {

    // remove no tasks message
    noTasksMsg.remove();

    //create span element
    let mainSpan = document.createElement("span");

    //create delete button
    let deleteElemenent = document.createElement("span");

    //create the main span text
    let text = document.createTextNode(theInput.value);

    //create the delete button text
    let deleteTexte = document.createTextNode("Delete");

    //add texte to main span 
    mainSpan.appendChild(text);

    //add class to main span 
    mainSpan.className = 'task-box';

    //add text to delete button
    deleteElemenent.appendChild(deleteTexte);

    //add class to delete button
    
    deleteElemenent.className = 'delete';

    //add delete button to main Span
    mainSpan.appendChild(deleteElemenent);
    
    //add the task to the container 
    tasksContainer.appendChild(mainSpan);

    //empty the input
    theInput.value = '';

    // focus On field
    theInput.focus();
}

};

document.addEventListener('click', function (e) {
// delete task
  if (e.target.className == 'delete') {

    //remove current task
    e.target.parentNode.remove();

  }

  //finish task 
  if (e.target.className == 'task-box') {

    // toggle class "finished"
    e.target.classList.toggle("finished");

  }
});

