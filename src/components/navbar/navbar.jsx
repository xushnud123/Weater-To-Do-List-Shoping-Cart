import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCart4 } from "react-icons/bs";
import "./navbar.scss";

export default function Nav() {
    const cart = useSelector((state) => state.cart);

  return (
    <div className="navbars">
      <ul className="nav-li">
        <NavLink to="/">Weather</NavLink>
        <NavLink to="/pro">Shopping Cart</NavLink>
        <NavLink to="/todo">ToDoList</NavLink>
        <NavLink to="/cart">
          <p>
            <BsCart4 /> <span>{cart.length}</span>
          </p>
        </NavLink>
      </ul>
    </div>
  );
}
