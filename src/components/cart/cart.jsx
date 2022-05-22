import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "@material-ui/core";
import Cards from "react-credit-cards";
import Product from "../common/product/product";
import "react-credit-cards/es/styles-compiled.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./car.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);
   const [number, SetNumber] = useState("");
   const [name, SetName] = useState("");
   const [month, SetMonth] = useState("");
   let [expiry, SetExpiry] = useState("");
   const [cvc, SetCvc] = useState("");
    const [focus, setFocus] = useState("");
    const handleDate = (e) => {
          SetMonth(e.target.value);
          SetExpiry(e.target.value);
    };
    const handleExpiry = (e) => {
      SetExpiry(month.concat(e.target.value));
    };

  useEffect(() => {
    let sum = 0;
    let numbers = cart;
    numbers.forEach(myFunction);
    function myFunction(item) {
      sum = sum + item.pay * item.qty;
    }
    setPrice(sum);
  }, [cart]);

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={() => setOpen(!open)}
        className="modal"
      >
        <div className="modal-body">
          <div className="card border-0">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
          <br />
          <form>
            <div className="row">
              <div className="col-sm-11">
                <label htmlFor="name">Card Number</label>
                <input
                  type="tel"
                  className="form-control"
                  value={number}
                  name="number"
                  
                  maxLength="16"
                  pattern="[0-9]+"
                  autoComplete="on"
                  onChange={(e) => {
                    SetNumber(e.target.value);
                  }}
                  onFocus={(e) => setFocus(e.target.name)}
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-sm-11">
                <label htmlFor="name">Card Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  name="name"
                  
                  autoComplete="on"
                  onChange={(e) => {
                    SetName(e.target.value);
                  }}
                  onFocus={(e) => setFocus(e.target.name)}
                ></input>
              </div>
            </div>
            <br />
            <div className="row">
              <div
                className="col-sm-8 "
              >
                <label htmlFor="month">Expiration Date</label>
              </div>
              <div className="col-sm-4">
                <label htmlFor="cvv">CVV</label>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <select
                  className="form-control"
                  name="expiry"
                  onChange={handleDate}
                >
                  <option value=" ">Month</option>
                  <option value="01">Jan</option>
                  <option value="02">Feb</option>
                  <option value="03">Mar</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">Aug</option>
                  <option value="09">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
              </div>
              &nbsp;
              <div className="col-sm-4">
                <select
                  className="form-control"
                  name="expiry"
                  onChange={handleExpiry}
                >
                  <option value=" ">Year</option>
                  <option value="21">2021</option>
                  <option value="22">2022</option>
                  <option value="23">2023</option>
                  <option value="24">2024</option>
                  <option value="25">2025</option>
                  <option value="26">2026</option>
                  <option value="27">2027</option>
                  <option value="28">2028</option>
                  <option value="29">2029</option>
                  <option value="30">2030</option>
                </select>
              </div>
              <div className="col-sm-3">
                <input
                  type="tel"
                  name="cvc"
                  maxLength="3"
                  className=" form-control card"
                  value={cvc}
                  autoComplete="on"
                  pattern="\d*"
                  onChange={(e) => {
                    SetCvc(e.target.value);
                  }}
                  onFocus={(e) => setFocus(e.target.name)}
                ></input>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-secondary form-control"
              onClick={()=>setOpen(false)}
            >Submit</button>
          </form>
        </div>
      </Modal>
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
                <h1>name</h1>
                <h2>weight</h2>
                <p>amount</p>
              </div>
              {cart.map((item) => {
                return (
                  <div className="name" key={item.id}>
                    <h2>{item.name}</h2> <span>{item.qty} kg</span>{" "}
                    <p>{item.pay * item.qty} $</p>
                  </div>
                );
              })}
              <button
                type="button"
                className="btn"
                onClick={() => setOpen(!open)}
              >
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
    </React.Fragment>
  );
};

export default Cart;
