// Business Logic for To-Do-List
function todoList(){
    this.list = [];
    this.currentId = 0;
}

todoList.prototype.Additem = function(listItem) {
    listItem.id =this.assignId();
    this.list.push(listItem);
}

todoList.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
}

todoList.prototype.findItem = function(id){
    for(var i=0; this.list.length; i++){
        if(this.list[i]){
            if(this.list[i].id == id){
                return this.list[i];
            }
        }
    };
    return false;
}


todoList.prototype.deleteItem = function(id){
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

// Interface logic