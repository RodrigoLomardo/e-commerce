import React from "react";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from 'react-router-dom'
import Footer from "./components/Footer.js";
import Cart from "./pages/Cart.js";
import { productsData } from "./api/Api.js";
import Product from "./components/Product.js";
import Login from "./pages/Login.js";

const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <ScrollRestoration/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: productsData,
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/login",
        element: <Login/>
      }
    ],
  },
])

function App() {
  return (
    <div className="font-bodyFont">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
