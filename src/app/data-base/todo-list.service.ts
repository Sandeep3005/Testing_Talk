export class TodoListService {
  todoList = [];

  addTodoItem(todo) {
    this.todoList.push(todo);
  }

  deleteTodoItem(todoId) {
    let m  = this.todoList.filter((todo) => todo.id != todoId);
    this.todoList = m;
  }

  getTodoItems() {
    return this.todoList;
  }
}
