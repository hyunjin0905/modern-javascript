

class TodoApp {
    constructor(todos) {
        console.log(todos)
        this.todoManager = new TodoManager(todos);
        console.log(new TodoManager(todos))
        this.todoContainerElem = document.querySelector(".todo-container");
        this.titleEl = document.querySelector(".title h2");
        this.plusBtnEl = document.querySelector(".add_todo button");
        console.log(this.plusBtnEl)
        this.renderTodos();
        this.bindEvents();
    }

    renderTodos () {
        this.todoContainerElem.innerHTML = "";
        this.todoManager.getList().forEach((todo, index) => {
            const todoEl = this.createTodoEl(todo, index);
            this.todoContainerElem.appendChild(todoEl);
        })
        this.renderTitle()
    }

    createTodoEl(todo, id) {
        const todoEl = document.createElement("div");
        todoEl.id = "todo- " + id;
        todoEl.className = "todo";
        todoEl.innerHTML = `<input type="checkbox" ${todo.done? "checked": "" }> <label>${todo.contents}</label>`
        console.log(todoEl)
        return todoEl;
    }

    renderTitle() {
        const now = new Date();
        const month = now.getMonth();
        const date = now.getDate();

        if (this.titleEl) {
            this.titleEl.innerHtml =
                `${month}월 ${date}일 <span class="left-count"> (${this.todoManager.leftTodoCount }) </span>`
        }
    }

    bindEvents() {
        console.log(this.plusbtnEl)
        this.plusBtnEl.addEventListener("click", (event) => {
            var textEl = document.querySelector('.add_todo input[type="text"]');
            this.todoManager.addTodo(textEl.value);
            textEl.value = "";
            this.renderTodos();
        })
        this.todoContainerEl.addEventListener("click", (event) => {
            if (event.target.nodeName === "INPUT" && event.target.parentElement.className === "todo") {
                const clickEl = event.target.parentElement,
                      index = clickedEl.id.replace("todo-", "")
                this.todoManager.getList()[index].toggle()
                this.renderTitle()

            }
        })
    }

}