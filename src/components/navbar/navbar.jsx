import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import "./navbar.scss";

export default function Nav() {
    const cart = useSelector((state) => state.cart);
    const [count,setCount] = useState(0)

    useEffect(()=>{
        let sum = 0
        const numbers = cart;
        numbers.forEach(myFunction);
        function myFunction(item) {
          sum += item.qty;
        }
        setCount(sum)

    },[cart])

  return (
    <div className="navbar">
      <ul className="nav-links">
        <Link to="/">Weather</Link>
        <Link to="/pro">Shopping Cart</Link>
        <Link to="/todo">ToDoList</Link>
        <Link to="/cart">
          <p>
            <BsCart4 /> <span>{count}</span>
          </p>
        </Link>
      </ul>
    </div>
  );
}
