var List = { name: ""
             }

$(function() {
  $("#listForm").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("#listName").val();
    var newList = Object.create(List);
    newList.name = inputtedName;

    $("#lists").append("<li>" + newList.name + "</li>");

    $("#listName").val("");


    $("#lists").click(function() {
      $("#listTitle h2").text(newList.name);
      debugger;

    });
  });

  $("#toDoForm").submit(function(event){

    var inputTask = $("#task").val();
    inputTask = inputTask[0].toUpperCase() + inputTask.slice(1);

    if (inputTask) {
      var task = {description1: inputTask};
      $("#toDoList").append("<li><span class='toDo'>" + task.description1 + "</span></li>");
    } else{
      alert("Please input a task")
    }

    $(".toDo").last().click(function(){
      $("#doneList").append("<li><span class='done'>" + task.description1 + "</span></li>");
      $(this).parent('li').remove();
    });

    $("#task").val("");

    event.preventDefault();
  });



});
