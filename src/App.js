import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import ProductsDetails from './components/products/ProductsDetails';
import Navbar from './components/header/Navbar';
function App() {
  return (
    <>
    {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
      </Routes>
    </>
  );
}

export default App;
