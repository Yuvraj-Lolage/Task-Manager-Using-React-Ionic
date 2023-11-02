import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";

import ExploreContainer from "../components/ExploreContainer";
import ToDoItem from "../components/ToDoItem";
import "./Home.css";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([
    "default task 1",
    "default task 2",
  ]); // Initialize the state with an empty array
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <>
      <div>
        <h1>My To Do List</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Add a new to-do item"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />

          <button
            onClick={addTodo}
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              padding: "10px 20px",
              margin:"5px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <div className="todos-container">
          {todos.map((todo, index) => (
            <ToDoItem title={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
