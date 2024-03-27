import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<div>Sign in</div>}/> 
        <Route path="/" element={<App/>}>
          <Route path="products/">
            <Route path="newarrivals" element={<div>new arrivals</div>}/>
            <Route path="bestsellers" element={<div>best sellers</div>}/>
            <Route path="shirts" element={<div>shirts</div>}/>
            <Route path="pants" element={<div>pants</div>}/>
            <Route path="footwears" element={<div>footwears</div>}/>
            <Route path="outerwears" element={<div>outerwears</div>}/>
            <Route index element={<div>products</div>}/>
          </Route>
          <Route path="about" element={<div>Hi !</div>}/>
          <Route path="user" element={<div>User</div>} />
          <Route path="cart"/>
          <Route index element={<div>Home</div>}/>  
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

document.getElementById('root').className = "h-screen";


