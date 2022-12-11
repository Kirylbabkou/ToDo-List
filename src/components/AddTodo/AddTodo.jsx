import React, { useState } from "react";
import uuid from "uuid";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  console.log(value);

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuid.v4(),
        title: value,
      },
    ]);
  }
  return (
    <div>
      <input
        placeholder="Add note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveTodo}>Save</button>
    </div>
  );
}

export default AddTodo;
