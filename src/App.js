import './App.css';
import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import ProductsDetails from './components/products/ProductsDetails';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Signin from './components/signup-signin/Signin';
import { currentUserAdded } from './features/signinSlice';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import Signup from './components/signup-signin/Signup';
import Cart from './components/cart/Cart';
function App() {
  const currentUser = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();

  const [productItems, setProductItems] = useState([]);
  // console.log(productItems)

  // GET Products
  useEffect(() => {
    fetch("/products")
      .then((r) => r.json())
      .then((data) => setProductItems(data));
  }, []);

  // GET /me
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(currentUserAdded(user)));
      }
    });
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} productItems={productItems} />
      <br />
      <br />
      <br />
      <Cart/>
      <main className="flex flex-col gap-16 relative">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage currentUser={currentUser} productItems={productItems} />
            }
          />
          <Route path="/products/:id" element={<ProductsDetails />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
