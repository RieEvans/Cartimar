import React, { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import { Home } from "./Pages/Home";
import { Shop } from "./Pages/Shop";
import { CartContext, ProductPage } from "./Pages/ProductPage";
import { All } from "./Pages/categories/allproducts";
import { Furnitures } from "./Pages/categories/Furnitures";
import { Skincare } from "./Pages/categories/Skincare";
import { Kitchen } from "./Pages/categories/Kitchen";
import { Tech } from "./Pages/categories/Tech";
import { Chairs } from "./Pages/categories/Chairs";
//Layouts
import { RootLayout } from "./Layout/RootLayout";
import { ProductsLayout } from "./Layout/ProductsLayout";



export default function App() {

  const [cartItem, setCartItem] = useState([])

  const addToCart = (item) => {
    setCartItem([...cartItem, item])
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route path="/" element = {<RootLayout />}>
          <Route index element = {<Home />} />

          {/* Categories Layout Section */}
          <Route path="categories" element = {<ProductsLayout />}>
              <Route path="allproducts" element = {<All />} />
              <Route path="furnitures" element = {<Furnitures />} />
              <Route path="skincare" element = {<Skincare />} />
              <Route path="kitchen" element = {<Kitchen />} />
              <Route path="tech" element = {<Tech />} />
              <Route path="chairs" element = {<Chairs />} />
          </Route>

          <Route path = "categories/product/:id" element = {<ProductPage />} />
      </Route>
    )
  )
  return (
    <main className="">
     
        <RouterProvider router={router} />
    
      
    </main>
  )
}
