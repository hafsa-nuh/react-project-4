import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import store from "./app/store";
// https://react-hot-toast.com/
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


