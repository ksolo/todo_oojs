(
    function(){
        function addTodo(event) {
            event.preventDefault();
            var $newTodo = $('#new-todo input:first-child');
            new TodoItem($newTodo.val(), '#todo-list').render();
            $newTodo.val("");

        }

        // TodoItem ===========================================================

        function TodoItem(name, parent) {
            this.name = name;
            this.$parent = $(parent);
        }

        TodoItem.prototype.render = function(){
            this.$parent.append(this.toHTML());
        }

        TodoItem.prototype.toHTML = function(){
            return "<li>" + this.name + "</li>";
        }


        // TodoForm ===========================================================

        function TodoForm(selector) {
            this.$parent = $(selector);
            $(this.$parent).on('submit', '#new-todo', addTodo);
        }

        TodoForm.prototype.render = function() {
            this.$parent.prepend(this.toHTML());
        }

        TodoForm.prototype.toHTML = function(){
            return  "<form id='new-todo'>" +
                        "<label>Todo: <input type='text' name='name'></label>" +
                        "<input type='submit'>" +
                    "</form>"
        }


        // TodoList ===========================================================

        function TodoList(selector) {
            this.$parent = $(selector);
        }

        TodoList.prototype.render =function() {
            this.$parent.append(this.toHTML());
        }

        TodoList.prototype.toHTML = function() {
            return "<ul id='todo-list'></ul>"
        }

        var Todo = {
            init: function(selector) {
                this.selector = selector;
                this.addForm();
                this.addTodoList();
            },

            addForm: function() {
                this.todoForm = new TodoForm(this.selector);
                this.todoForm.render();
            },

            addTodoList: function(){
                this.todoList = new TodoList(this.selector);
                this.todoList.render();
            }

        }

    this.Todo = Todo;
    }
)()

