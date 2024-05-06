import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Shipping from './pages/Shipping.jsx';
import Signin from './pages/Signin.jsx';
import ProductDisplay from './pages/ProductDisplay.jsx';
import Product from './pages/Product.jsx';
import User from './pages/User.jsx';
import './styles/index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CartMobile from './pages/CartMobile.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/shipping" element={<Shipping />}/>
        <Route path="/" element={<App/>}>
          <Route path="products/">
            <Route path="newarrivals" element={<ProductDisplay title='New Arrival'/>}/>
            <Route path="tshirts" element={<ProductDisplay title='T-shirts'/>}/>
            <Route path="shirts" element={<ProductDisplay title='Shirts'/>}/>
            <Route path="pants" element={<ProductDisplay title='Pants'/>}/>
            <Route path="outerwears" element={<ProductDisplay title='Outerwears'/>}/>
            <Route path="product/:productId" element={<Product/>}/>
            <Route index element={<ProductDisplay title='All Products'/>}/>
          </Route>
          <Route path="about" element={<div>Hi !</div>}/>
          <Route path="user" element={<User/>} />
          <Route path="cart" element={<CartMobile />}/>
          <Route index element={<Home />}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

document.getElementById('root').className = "h-screen";


