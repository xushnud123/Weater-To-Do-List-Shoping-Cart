import React, { useEffect,useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { BiCheckDouble } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";

const List = ({item,todos,setTodos}) => {
    const [edit, setEdit] = useState(false);
      const [textEdit, setTextEdit] = useState("");
    const [chec,setChec] = useState(false)

          const deleteHandler = (id) => {
            const todo = todos.filter((item) => item.id !== id);
            setTodos(todo);
          };

        const checLocation =(id) => {
          const index = todos.findIndex((i) => i.id === id);
          const to = todos;
          to[index].completed = !chec;
          setTodos(to);
          setChec(!chec);
          return to;
        } 

        const editHandler = (id) => {
          const item = todos.find((i) => i.id === id);
          setEdit(!edit);
          setTextEdit(item.text);
          console.log(item.text);
        };

        const update = (id) => {
          const index = todos.findIndex((i) => i.id === id);
          const to = todos;
          to[index].text = textEdit;
          setTodos(to);
          setEdit(!edit);
            return to
        };

         useEffect(() => {

           localStorage.setItem("todos", JSON.stringify(todos));
           //  console.log(localStorage.getItem("todos"),JSON.parse(todos));
         }, [edit,chec,todos]);

    return (
      <div key={item.id} className="list">
        <div className="list-item">
          {edit ? (
            <input
              type="text"
              className="in"
              name="title"
              value={textEdit}
              autoFocus
              onChange={(e) => setTextEdit(e.target.value)}
              placeholder="Title"
            />
          ) : (
            <h1 className={item.completed ? "" : "item"}>{item.text}</h1>
          )}
        </div>
        <button
          type="button"
          className="chec"
          onClick={() => checLocation(item.id)}
        >
          {item.completed ? <BiCheckDouble /> : <MdOutlineClose />}
        </button>
        {edit ? (
          <button className="saveBtn" onClick={() => update(item.id)}>
            Save <MdOutlineSaveAlt />
          </button>
        ) : (
          <button className="editBtn" onClick={() => editHandler(item.id)}>
            Edit <FiEdit />
          </button>
        )}
        <button className="deleteBtn" onClick={() => deleteHandler(item.id)}>
          Delete <RiDeleteBin5Line />
        </button>
      </div>
    );
}
 
export default List;