import React from 'react'
import {  useSelector } from "react-redux";
import Product from './product/product';
import './products.scss'

const Products = () => {
  const product =  useSelector(store => store.products)
  const cart = useSelector((store) => store.cart);

    return ( 
        <React.Fragment>
        <div className="wrap">
      <div className="basket">
      </div>
      <div className="row">
        {product.map((item) => {
          const data = cart.filter(k => k.name === item.name)
          if(data.length > 0){
            return <Product key={data[0].id} item={data[0]} />;
          }
        return <Product key={item.id} item={item}/>
        })}
      </div>
      </div>
        </React.Fragment>
     );
}
 
export default Products;