// Business Logic for To-Do-List
function TodoList(){
    this.list = [];
    this.currentId = 0;
}

TodoList.prototype.addItem = function(listItem) {
    listItem.id =this.assignId();
    this.list.push(listItem);
}

TodoList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

TodoList.prototype.findItem = function(id){
    for(var i=0; this.list.length; i++){
        if(this.list[i]){
            if(this.list[i].id == id){
                return this.list[i];
            }
        }
    };
    return false;
}


TodoList.prototype.deleteItem = function(id){
    for(var i=0; this.list.length; i++){
        if(this.list[i]){
            if(this.list[i].id == id){
                delete this.item[i];
                return true;
            }
        }
    };
    return false
}

function ListItem(name) {
    this.name = name;
}
// function List(){
//     this.listItems = [];
// }

ListItem.prototype.GetName = function(){
    return this.name; 
}

// Interface Logic

function displayListItem(listToDisplay){
    var toDoList = $("#todo-list");
    var htmlListForItem=  "";
    listToDisplay.list.forEach(function(listItem) {
        htmlListForItem += `<li id='${listItem.id}'>${listItem.name}</li>`;
        htmlListForItem += `<br>`;     
    });
    toDoList.html(htmlListForItem);
}

// function resetFormInputs(formInputs) {
//     formInputs.foreach(function(formInput){
//         formInput.val(" ");
//     });
// }
function attachToDoListListeners(){
$("ul#todo-list").on("click",  ".delete-button", function() {
    todoList.deleteItem(this.id);
    $ ("#todo-list").toggle();
    //displayListItem(todoList);
    })
}

var newtodoList = new TodoList();

$(document).ready(function() {
    attachToDoListListeners();
        $("form#create-list-form").submit(function(event) { 
            event.preventDefault();
            var listItemInput = $("#list-input");
            var inputArray=[listItemInput];
            var todo = $('#todo-list');
            var newListItem = new ListItem (listItemInput.val());
            newtodoList.addItem(newListItem);
            displayListItem(newtodoList);
            // resetFormInputs(inputArray);

        });
});
