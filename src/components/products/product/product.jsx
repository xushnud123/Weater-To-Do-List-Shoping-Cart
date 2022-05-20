import React from 'react'
import { useDispatch} from "react-redux";
import { cartAdd,removeCart } from "../../../store/shoppingCart";
import { ToastContainer, toast } from "react-toastify";

const Product = ({item}) => {
      const dispatch = useDispatch();
      const notify = () => toast.success("🛒Successfully added to the cart!!");

    return (
      <div className="card">
        <ToastContainer autoClose={2000} />
        <div className="card-header">
          <img src={item.path} alt="img not found" />
        </div>
        <div className="card-body">
          <h1>{item.name}</h1>
          <p>{item.pay}$</p>
        </div>

        <div className="card-footer">
          {item.qty === 0 || item.qty === undefined ? (
            <button
              type="button"
              className="btn"
              onClick={() => {
                dispatch(
                  cartAdd({
                    id: item.id,
                  })
                );
                notify();
              }}
            >
              ADD CARD
            </button>
          ) : (
            <div className="btnCount">
              <div
                className="dec"
                onClick={() =>
                  dispatch(
                    removeCart({
                      id: item.id,
                      qty: item.qty,
                    })
                  )
                }
              >
                <p>-</p>
              </div>
              <p>{item.qty} kg</p>
              <div
                className="inc"
                onClick={() =>
                  dispatch(
                    cartAdd({
                      id: item.id,
                    })
                  )
                }
              >
                <p>+</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}
 
export default Product;