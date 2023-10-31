import {Link, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import AllProducts from './views/AllProducts';
import EditProduct from './views/EditProduct';
import NewProduct from './views/NewProduct';
import NotFound from './views/NotFound';
import OneProduct from './views/OneProduct';

function App() {
  return (
    <div >
      <nav>
        
        <div>
        <h1>products</h1>
          <Link to="/products"> All products</Link>
          <Link to="/products/new">new products</Link>
        </div>
      </nav>



      <Routes>
        <Route path='/' element={<Navigate to="/products" replace/>} />
        <Route path='/products' element={<AllProducts/>} />
        <Route path='/products/:_id/edit' element={<EditProduct/>} />
        <Route path='/products/:_id' element={<OneProduct/>} />
        <Route path='/products/new' element={<NewProduct/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
