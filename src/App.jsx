import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// Pages
import { Home } from "./Pages/Home";
import { CartItem } from "./Pages/Cart-Items";
import { CartContext, ProductPage } from "./Pages/ProductPage";
import { All } from "./Pages/categories/allproducts";
import { Furnitures } from "./Pages/categories/Furnitures";
import { BathroomAccesories } from "./Pages/categories/Bathroom-Accesories";
import { Kitchen } from "./Pages/categories/Kitchen";
import { Tech } from "./Pages/categories/Tech";
import { Chairs } from "./Pages/categories/Chairs";
import { Footer } from "./components/Footer";
//Layouts
import { RootLayout } from "./Layout/RootLayout";
import { ProductsLayout } from "./Layout/ProductsLayout";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (item) => {  //Pass this function into the Context Provider
    setCartItem([...cartItem, item]);
  };
  const notify = () => // Notification //Pass this function into the Context Provider
    toast(
      "Add to Cart Succeed", 
      {
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          fontSize: "18px",
        },
      }
    );
  const notifyDeleteItem = () => toast(
    "Item has been removed ", 
    {
      icon: "🗑️",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
        fontSize: "18px",
      },
    }
  );

  // local storage
  useEffect(() => {
    try {
      const json = localStorage.getItem("cartItem");
      const savedCart = JSON.parse(json);
      if (Array.isArray(savedCart)) {
        setCartItem(savedCart);
      }
    } catch (error) {
      console.error("Error while parsing cartItem from localStorage:", error);
      // You can handle the error in any way that fits your application
      // For example, set an empty cart as a default state:
      // setCartItem([]);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem("cartItem", json);
  }, [cartItem]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/Cart-Item" element={<CartItem />} />
        {/* Categories Layout Section */}
        <Route path="categories" element={<ProductsLayout />}>
          <Route path="allproducts" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="bathroom-accesories" element={<BathroomAccesories />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="tech" element={<Tech />} />
          <Route path="chairs" element={<Chairs />} />
        </Route>             

        <Route path="categories/product/:id" element={<ProductPage />} />
      </Route>
    )
  );
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addToCart, notify, notifyDeleteItem }}>
      <main>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
        <RouterProvider router={router} />
        <Footer />
      </main>
    </CartContext.Provider>
  );
}
