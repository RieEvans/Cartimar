import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./ProductPage";
import { ItemCarts } from "../components/Item-Carts";

export const CartItem = () => {
  const { cartItem } = useContext(CartContext);
  
  const [totalPrice, setTotalPrice] = useState()
  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);


  return (
    <section className="mt-40 m-auto sm:w-[90%] md:w-[80%]   p-10">
      <main>
        <h1 className="text-3xl font-semibold tracking-wide">
          Your Cart ({cartItem.length}) 🛒 {/*Show the Number of Items in the Cart */}
        </h1>
        <div className="cart-body mt-20">
          {cartItem.length < 1 ? ( // Add Condition if the Cart is Empty (below 1 items) show the Cart is Empty else import the component (<ItemCarts/>)
            <div className="flex flex-col items-center justify-center ">
              <h1 className="text-center font-bold tracking-wide text-3xl">
                Your Cart is Empty <span className="absolute">😪</span>
              </h1>
              <div className="sm:w-[300px] md:w-[350px] mt-20">
                <img
                  className="w-full h-full object-cover"
                  src="/others/empty-cart.svg"
                  alt=""
                />
              </div>
              <Link
                to={`/categories/allproducts/`}
                className="bg-slate-900 text-white text-2xl px-2 py-1 rounded mt-10">
                Keep Shopping
              </Link>
            </div>
          ) : (
            <ItemCarts />
          )}
          <div className="text-end mt-10 ">
              <h1 className='font-bold text-2xl'>Subtotal:</h1>
              <p className='font-semibold text-xl'>₱ {totalPrice + ".00"}</p>
          </div>
        </div>
      </main>
    </section>
  );
};
