import React, { useEffect,useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { MdOutlineSaveAlt } from "react-icons/md";

const List = ({item,todos,setTodos,delet}) => {
    const [edit, setEdit] = useState(false);
      const [textEdit, setTextEdit] = useState("");
    const [chec,setChec] = useState(true)

          const deleteHandler = (id) => {
            const todo = todos.filter((item) => item.id !== id);
            setTodos(todo);
            delet()
          };

        const checLocation =(e,id) => {
          console.log(chec,item.completed)
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

         const label = { inputProps: { "aria-label": "Checkbox demo" } };

    return (
      <div key={item.id} className="list">
        <Checkbox
          {...label}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 40 } }}
          checked={!item.completed && !chec}
          onClick={(e) => checLocation(e,item.id)}
          className="chec"
        />
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
        {edit ? (
          <Button className="saveBtn" onClick={() => update(item.id)}>
            <MdOutlineSaveAlt />
          </Button>
        ) : (
          <Button className="editBtn" onClick={() => editHandler(item.id)}>
            <FiEdit />
          </Button>
        )}
        <Button className="deleteBtn" onClick={() => deleteHandler(item.id)}>
         <RiDeleteBin5Line />
        </Button>
      </div>
    );
}
 
export default List;