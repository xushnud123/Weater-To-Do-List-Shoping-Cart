import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import "./navbar.scss";

export default function Nav() {
    const cart = useSelector((state) => state.cart);

  return (
    <div className="navbars">
      <ul className="nav-li">
        <Link to="/">Weather</Link>
        <Link to="/pro">Shopping Cart</Link>
        <Link to="/todo">ToDoList</Link>
        <Link to="/cart">
          <p>
            <BsCart4 /> <span>{cart.length}</span>
          </p>
        </Link>
      </ul>
    </div>
  );
}
