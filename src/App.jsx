import { Routes, Route } from 'react-router-dom'
import "./App.css";
import "./index.css";
import Navigation from "./Components/Navigation";
import ProductDetails from './Components/Product-details';
import Product from './Components/Products';

function App() {
  return (
    <>
      <div className="body">
        <div className="container main">
          <Navigation />
          <Routes>
            <Route path='/product-details/:id' element={<ProductDetails />} />
            <Route path='/' element={<Product />} />
          </Routes>
        </div>
      </div>
    </>
  )
}
export default App;