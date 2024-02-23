// import React from 'react'
import { useState, useEffect } from 'react';
import './Todos.scss'
import axios from 'axios';

const Todos = () => {
    const [loading, setLoading] = useState<boolean>(false);
const [todos, setTodos] = useState<any[]>([
    {id: Number,
    title: String,
    complete: Boolean,}
]);
//  loading any;
// const [error, setError] = useState<Error | null>(null);
// const [openAdd, setOpenAdd] = useState<boolean>(false);
// const [openEdit, setOpenEdit] = useState<boolean>(false);
// const [editedTodo, setEditedTodo] = useState<todos | <null>(null);
// const [deleteTodo, setDeleteTodo] = useState<todos | <null>(null);






    const fetchTodos = async (): Promise<void> => {
      
        setLoading(true);
        try {
          const res = await axios.get<any[]>("http://localhost:3000/Todos");
          const data: any[] = res.data;
          setTodos(data);
        } 
        // catch (error) {
        //   setError(error);
        // } 
        finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        fetchTodos();
      }, []);
      


      
  return (
    <div className='Todos'>
            <p className="p">Welcome to Todos</p>
        <div className="container">
                    {todos.map((td:any) => (
            <div className="cards">
                <div className="card1" key={td.id}>
                    <p className="p1">  Todo-{td.id} : {td.title}  </p>
                    <p className="p2">{td.complate ? '✔' : '❌'}</p>
                    

                </div>
                    <div className="card2">
                        <button className="button1"
                      
                        >Edit</button>
                        <button className="button2" >Delete</button>
                </div>
                
            </div>
                    )
                    )}
        </div>

    </div>
  )
}

export default Todos