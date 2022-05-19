import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import configureStore from "./store/configureStore";
import Navbar from "./components/navbar/navbar";
import Cart from "./components/cart/cart";
import Products from "./components/products/products";
import ToDoList from "./components/to-do-list/to-do-list";
import Weather from "./components/weather/weather";

const store = configureStore()



function App() {
  return (
    <Provider store={store} >
          <Navbar />
        <Routes>
          <Route path="/pro" element={<Products/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/" element={<ToDoList/>}/>
        </Routes>
    </Provider>
  );
}

export default App;
