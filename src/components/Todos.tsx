// import React from 'react'
import { useState, useEffect } from "react";
import "./Todos.scss";
import axios from "axios";

const Todos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<any[]>([]);
  const [newData, setNewData] = useState<string>('');

  const [edit, setEdit] = useState<string>("");

  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await axios.get<any[]>("http://localhost:3000/Todos");
      const data: any[] = res.data;
      setTodos(data);
    } finally {
    //   catch (error) {
    //     setError(error);
    //   }
      setLoading(false);
    }
  };
  const editData = async () => {
    try {
      const response = await fetch('http://localhost:3000/Todos/id', {
        method: 'PUT', // Or POST if your API doesn't support PUT
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newData })
      });

      if (!response.ok) {
        throw new Error('Failed to edit data');
      }

      console.log('Data edited successfully');
    } catch (error) {
      console.error('Error editing data:', error);
    }
  }



  const deleteData = async () => {
    try {
      const response = await fetch('http://localhost:3000/Todos', {
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Failed to delete data');
      }

      console.log('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };


//   const handleEdit = (e) => {
//     console.log(e.target.value.id);
//   };
  const handleDoubleClick = () => {
    setIsEditing(!isEditing);
  };



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
              <button className="button2" onClick={deleteData} >Delete</button>
            </div>
            <div className={isEditing ? "input" : "none"} > 
              <input type="text" id="text"
              value={todos}
              onChange={(e) => setNewData(e.target.value)}
              className="text" />
            <button className="button1"  onClick={editData} > Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Todos;
