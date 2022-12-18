import React, { useState } from "react";
import { v4 } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  console.log(value);

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: v4(),
        title: value,
      },
    ]);
    setValue("");
  }
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Add note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={s.addTodoInput}
        />
        <Button onClick={saveTodo} className={s.btn}>
          Save
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
