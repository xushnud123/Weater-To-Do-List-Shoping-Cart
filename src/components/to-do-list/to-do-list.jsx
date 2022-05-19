import React, { useEffect,useState } from "react";
import { AiFillFileAdd } from "react-icons/ai";
import List from "./list";
import "./to-do-list.scss";

const ToDoList = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== ''){
        setTodos([
            ...todos,
            { text: name, completed: true, id: Math.random() * 1000 },
        ]);
        setName("");
    }
    else{
       return alert('iltimos maydonni to`ldiring')
    }
  };

   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);


  return (
    <div className="inputWrapper">
      <div className="title">TO-DO-LIST</div>
      <div className="section">
        <form className="row" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            className="in"
            name="add task"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Add Task"
          />
          <button
            type="submit"
            className="btn"
            // onClick={(e) => handleSubmit(e)}
          >
            Add Task <AiFillFileAdd />
          </button>
        </form>
      </div>
      <div className="lists">
        {todos.map((item) => {
          return (
            <List key={item.id} item={item} todos={todos} setTodos={setTodos} />
          );
        })}
      </div>
    </div>
  );
};

export default ToDoList;
