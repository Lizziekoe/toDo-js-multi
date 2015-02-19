var List = { name: "" }
var Task = { description1: ""}

$(function() {
  var currentList = null;

  $("#listForm").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#listName").val();
    var newList = Object.create(List);
    newList.name = inputtedName;
    newList.tasks = [];

    $("#lists").append("<li><span class='listItem'>" + newList.name + "</span></li>");

    $("#listName").val("");

    $(".listItem").last().click(function() {
      $("#listTitle h2").text(newList.name);
      currentList = newList
      $('#toDoList').empty();
      currentList.tasks.forEach(function(task) {

        $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");

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

    $(".toDo").last().click(function(){
      $("#doneList").append("<li><span class='done'>" + newTask.description1 + "</span></li>");
      $(this).parent('li').remove();
    });

    $("#task").val("");
    event.preventDefault();
  });
});
