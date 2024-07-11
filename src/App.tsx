import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import ToDo from "./models/todo";

function App() {
  const todos = [
    new ToDo("Learn React"), 
    new ToDo("Learn TypeScript")
  ];

  const addTodoHandler = (todoText: string) => {
    
  };

  return (
    <div>
      <NewTodo onAddToDo={addTodoHandler}/>
      <Todos items={todos} />
    </div>
  );
}

export default App;
