/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todoArr = [];
  }

  add(todo) {
    this.todoArr.push(todo);
  }

  remove(indexOfTodo) {
    this.todoArr.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index > -1 && index < this.todoArr.length) {
      this.todoArr[index] = updatedTodo;
    }
  }

  getAll() {
    return this.todoArr;
  }

  get(indexOfTodo) {
    if (indexOfTodo > -1 && indexOfTodo < this.todoArr.length) {
      return this.todoArr[indexOfTodo];
    } else 
    {
      return null;
    }
  }

  clear() {
    this.todoArr.splice(0, this.todoArr.length);
  }
}

/*let myToDo = new Todo();

myToDo.add("Task1");
myToDo.add("Task2");
myToDo.add("task3");

console.log(myToDo.getAll());

let str = myToDo.get(2);
console.log(str);

myToDo.add("Task2");
console.log(myToDo.getAll());

myToDo.remove(2);
console.log(myToDo.getAll());

myToDo.clear();
console.log(myToDo.getAll());*/

module.exports = Todo;
