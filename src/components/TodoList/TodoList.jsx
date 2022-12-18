import { React, useState } from "react";
import { Button } from "react-bootstrap";
import s from "./TodoList.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

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
    <div>
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div>{item.title}</div>
          )}

          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)} className={s.btn}>
                <FontAwesomeIcon icon={faSave} /> Save
              </Button>
              <Button onClick={() => deleteTodo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => editTodo(item.id, item.title)}
                className={s.btn}
              >
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
              <Button onClick={() => deleteTodo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
