import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './component/Context/user-context.component';
import { CategoryProvider } from './component/Context/Product.context';
import CartProvider from './component/Context/CartContext';
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  this is preinstalled by the cra it is used for the development purpose . 
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
