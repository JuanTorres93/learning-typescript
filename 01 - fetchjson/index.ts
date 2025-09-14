import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// DOC interface to define the structure of an object
// DOC the interface defines a new type
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  // DOC use the object interface
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// DOC add type annotations to function parameters
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};

// DOC There are two different types of types
// 1. Primitive Types => number, string, boolean, symbol, null, undefined, void
// 2. Object Types: => arrays, objects, classes, functions
