import React, { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillFileAdd } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import List from "./list";
import "./to-do-list.scss";

const ToDoList = () => {
  const [name, setName] = useState("");
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });

  const notify = () => toast.error("Iltimos maydonni to`ldiring");
  const suc = () => toast.success("Muvaffaqiyatli qo'shildi");
  const delet = () => toast.success("Muvaffaqiyatli o'cchirildi");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name !== ''){
        setTodos([
            ...todos,
            { text: name, completed: true, id: Math.random() * 1000 },
        ]);
        setName("");
        suc()
    }
    else{
       return notify()
    }
  };

   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   

  return (
    <React.Fragment>
      <ToastContainer autoClose={2000} />
      <div className="inputWrapper">
        <div className="title">TO-DO-LIST</div>
        <div className="section">
          <form className="rows" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="in"
              name="add task"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Add Task"
            />
            <Button type="submit" className="btn" variant="contained">
              Add Task <AiFillFileAdd />
            </Button>
          </form>
        </div>
        <div className="lists">
          {todos.map((item) => {
            return (
              <List
                key={item.id}
                item={item}
                todos={todos}
                setTodos={setTodos}
                delet={delet}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ToDoList;
