import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import ProductDisplay from './pages/ProductDisplay.jsx';
import './styles/index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<div>Sign in</div>}/> 
        <Route path="/" element={<App/>}>
          <Route path="products/">
            <Route path="newarrivals" element={<ProductDisplay title='New Arrival'/>}/>
            <Route path="bestsellers" element={<ProductDisplay title='Best Seller'/>}/>
            <Route path="shirts" element={<ProductDisplay title='Shirts'/>}/>
            <Route path="pants" element={<ProductDisplay title='Pants'/>}/>
            <Route path="footwears" element={<ProductDisplay title='Footwears'/>}/>
            <Route path="outerwears" element={<ProductDisplay title='Outerwears'/>}/>
            <Route index element={<ProductDisplay title='All Products'/>}/>
          </Route>
          <Route path="about" element={<div>Hi !</div>}/>
          <Route path="user" element={<div>User</div>} />
          <Route path="cart"/>
          <Route index element={<Home />}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

document.getElementById('root').className = "h-screen";


