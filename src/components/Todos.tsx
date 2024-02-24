// import React from 'react'
import { useState, useEffect } from "react";
import "./Todos.scss";
import axios from "axios";

const Todos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<any[]>([
    // {/
    //   id: Number, title: String, complete: Boolean
    // },
  ]);
  const [edit, setEdit] = useState<string>("");
//   const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const fetchTodos = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await axios.get<any[]>("http://localhost:3000/Todos");
      const data: any[] = res.data;
      setTodos(data);
    } finally {
      // catch (error) {
      //   setError(error);
      // }
      setLoading(false);
    }
  };
  const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit(e.target.value);
  };
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="Todos">
      <p className="p">Welcome to Todos</p>
      <div className="container">
        {todos.map((td: any) => (
          <div className="cards" key={td.id}>
            <div className="card1">
              <p className="p1">
                {" "}
                Todo-{td.id} : {td.title}
              </p>
              <p className="p2">{td.completed ? "✔" : "❌"}</p>
            </div>
            <div className="card2">
              <button className="button1" onClick={handleDoubleClick} >Edit</button>
              <button className="button2">Delete</button>
            </div>
            <div className="input" onDoubleClick={handleDoubleClick} >
              <input type="text" id="text" value="text" onChange={handleEdit}  className="text" />
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
