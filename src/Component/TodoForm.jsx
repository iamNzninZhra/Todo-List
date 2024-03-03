/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import BtnBootstrap from "./ButtonComponent";
import { css } from '@emotion/css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import "bootstrap/dist/js/bootstrap.bundle.min";

const TodoForm = () => {
    const [todos, setTodos] = useState([
        { Title: "Task 1", Importance: "Importance 1", completed: false },
        { Title: "Task 2", Importance: "Importance 2", completed: false },
        { Title: "Task 3", Importance: "Importance 3", completed: false },
        { Title: "Task 4", Importance: "Importance 4", completed: false },
        { Title: "Task 5", Importance: "Importance 5", completed: false },
    ]);

    // delete button
    const [deletedTodos, setDeletedTodos] = useState([]);

    // complete and not complete buttons
    const handleCompleted = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = !updatedTodos[index].completed;
        setTodos(updatedTodos);
    };

    // delete button
    const handleDelete = (index) => {
        const deletedTodo = todos.splice(index, 1);
        setDeletedTodos([...deletedTodos, deletedTodo[0]]);
    };

    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <div className={css`
                display: flex;
                justify-Content: center;
                align-Items: center;
                flex-Direction: column;
                width: 80%;
                height: 100%;
                margin: 10px auto;
      
            `}>
                <h3 className={css`
                border-bottom: 1px solid black;
                `}>
                    My Todo List
                </h3>

                <Stack direction="horizontal" gap={0}>
                    <Form.Control className="me-auto" placeholder="Add Your Task..." onChange={handleChange} />
                    <BtnBootstrap backgroundColor="outline-primary" buttonlable="Add To List" />
                </Stack>

                <span className="position-absolute" style={{ left: '160px', borderBottom: '1px solid #000' }} />
                {inputValue}
            </div>

            {todos.map((element, index) => (
                <div
                    key={element.Title}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: "1px solid black",
                        margin: "40px auto 0 auto",
                        width: "50%",
                        height: "80px",
                        borderRadius: "8px",
                        fontWeight: "bold",
                    }}
                >
                    <div
                        style={{
                            textDecoration: element.completed ? "line-through" : "none",
                        }}
                    >
                        {element.Title} - {element.Importance}
                    </div>
                    <BtnBootstrap
                        backgroundColor="success"
                        buttonlable="Completed"
                        borderColor="green"
                        onClick={() => handleCompleted(index)}
                        completed={element.completed}
                    />
                    <BtnBootstrap
                        backgroundColor="danger"
                        buttonlable="Not Completed"
                        borderColor="red"
                        onClick={() => handleCompleted(index)}
                        completed={!element.completed}
                    />
                    <BtnBootstrap borderColor="#F5E8DD" backgroundColor="light" buttonlable="Delete" onClick={() => handleDelete(index)} />
                    <div style={{ marginLeft: "20px" }}>
                        Date: / /
                    </div>
                </div>
            ))}
        </>
    );
};

export default TodoForm;
