import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
    

  const addTodoHandler = (todoText: string) => {
    const newToDo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newToDo);
    });
  };

  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
