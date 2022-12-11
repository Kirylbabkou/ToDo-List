import "./App.css";
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { React, useState } from "react";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true,
    },
    {
      id: 2,
      title: "2 todo",
      status: true,
    },
    {
      id: 3,
      title: "3 todo",
      status: false,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <AddTodo />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
