class TodoApp {
    constructor(todos) {
        this.todoManager = new TodoManager(todos);
        this.todoContainerElem = document.querySelector(".todo-container");



    }

}