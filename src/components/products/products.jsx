import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { cartAdd } from '../../store/shoppingCart';
import Product from './product/product';
import './products.scss'

const Products = () => {
  const product =  useSelector(store => store.products)

    return ( 
        <React.Fragment>
        <div className="wrap">
      <div className="basket">
      </div>
      <div className="row">
        {product.map((item) => {
        return <Product key={item.id} item={item}/>
        })}
      </div>
      </div>
        </React.Fragment>
     );
}
 
export default Products;