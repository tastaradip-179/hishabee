import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';
import 'rsuite/dist/rsuite.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import { StoreProvider } from './Store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/signin",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Registration/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/shop",
    element: <Shop/>,
  },
  {
    path: "/shop/product/:id",
    element: <ProductDetails/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <RouterProvider router={router} />
  </StoreProvider>
);



