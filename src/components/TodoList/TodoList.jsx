import { React, useState } from "react";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  // console.log(edit);

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {todo.map((item) => (
        <div key={item.id}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div
              style={{
                color: "white",

                backgroundColor: "#44014C",
              }}
            >
              {item.title}
            </div>
          )}

          {edit === item.id ? (
            <div>
              <button onClick={() => saveTodo(item.id)}>Save</button>
              <button onClick={() => deleteTodo(item.id)}>Del</button>
            </div>
          ) : (
            <div>
              <button onClick={() => editTodo(item.id, item.title)}>
                Edit
              </button>
              <button onClick={() => deleteTodo(item.id)}>Del</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
