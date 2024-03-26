import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'

function App() {
return (
 <div className="app">
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<Aboutus />} />
    <Route path='/all-product' element={<Aboutus />} />
  </Routes>
 </div>
)} 
export default App;