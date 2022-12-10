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
function App() {
  const currentUser = useSelector((state) => state.currentUser.user);
  const dispatch = useDispatch();

  // GET /me
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(currentUserAdded(user)));
      }
    });
  },[]);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
