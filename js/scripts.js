var List = { name: "" }
var Task = { description1: ""}

$(function() {
  var currentList = null;
  // This is being used as a global variable to be reassigned as needed in between the two submit events

  $("#listForm").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#listName").val();
    var newList = Object.create(List);
    newList.name = inputtedName;
    newList.tasks = [];
    // This puts in a new array into the newList so that it is a unique array, rather than having
    // a prototype with a 'tasks' array that deals with lots of inheritance / prototypal issues

    $("#lists").append("<li><span class='listItem'>" + newList.name + "</span></li>");

    $("#listName").val("");

    $(".listItem").last().click(function() {
      $("#listTitle h2").text(newList.name);
      currentList = newList
      // This is reassigning the newList properties previously handled to the currentList,
      // which can now be manipulated
      $('#toDoList').empty();
      // When a new list is clicked, the .empty function clears out the tasks currently displayed
      currentList.tasks.forEach(function(task) {
        $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");
      // This loop, which is forEach instead of each because it is dealing with the array of tasks,
      // is repopulating the list of tasks to be done unique to the newly clicked on list after the
      // tasks list has been emptied
      });
    });
  });

  $("#toDoForm").submit(function(event){

    var inputTask = $("#task").val();
    inputTask = inputTask[0].toUpperCase() + inputTask.slice(1);

    if (inputTask !== "") {
      var newTask = Object.create(Task);
      newTask.description1 = inputTask;

      currentList.tasks.push(newTask);

      $("#toDoList").append("<li><span class='toDo'>" + newTask.description1 + "</span></li>");

    } else {
      alert("Please input a task")
    }
    // This if statement worked in the previous iteration of the script, but now is slightly broken.
    // We didn't remove it because it breaks the true functionality of the document... we think.

    $(".toDo").last().click(function(){
      $("#doneList").append("<li><span class='done'>" + newTask.description1 + "</span></li>");
      $(this).parent('li').remove();
    });

    $("#task").val("");
    event.preventDefault();
  });
});
