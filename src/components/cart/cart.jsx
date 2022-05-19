import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import product from "../../utils/data/cartDate";
import Product from "../products/product/product";
import "./car.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    let numbers = cart;
    numbers.forEach(myFunction);
    function myFunction(item) {
      sum = sum + item.pay * item.qty;
    }
    setPrice(sum);
  }, [cart]);

  console.log(cart);
  return (
    <div className="wrapper">
      {cart.length ? (
        <div className="section">
          <div className="row">
            {cart.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
          <div className="basket">
            <div className="amount">
              <h1>product name</h1>
              <p>amount</p>
            </div>
            {cart.map((item) => {
              return (
                <div className="name" key={item.id}>
                  <h2>{item.name}</h2> <span>{item.qty} kg</span>{" "}
                  <p>{item.pay} $</p>
                </div>
              );
            })}
            <button type="button" className="btn">
              pay the amount: {price} $
            </button>
          </div>
        </div>
      ) : (
        <div className="empty">

          <img
            src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-online-business-vector-icon-template-vector-id861576608?k=20&m=861576608&s=612x612&w=0&h=UgHaPYlYrsPTO6BKKTzizGQqFgqEnn7eYK9EOA16uDs="
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
