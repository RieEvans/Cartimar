import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Pages/ProductPage";

export const ItemCarts = () => {
  const { cartItem, setCartItem, notifyDeleteItem } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);
  const calculatePrice = (quantity, item) => {
    return quantity * item;
  };

  const [deleteItem, setDeleteItem] = useState(cartItem);

  const removeFromCart = (id) => {
    const updateCart = cartItem.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(cartItem.id);
    localStorage.removeItem("cartItem", json);
  };

  useEffect(() => {
    setCartItem(deleteItem);
  }, [deleteItem, setCartItem]);

  return (
    <section>
      {cartItem.map((item) => (
        <div className="md:flex items-center justify-around mb-10 bg-white p-5 rounded-md" key={item.id} >
          <div className="sm:w-full md:w-[250px]">
            <img
              className="w-full h-full object-cover"
              src={item.img}
              alt="product"
            />
          </div>
          <div className="middle w-full sm:mt-5 md:mt-0">
            <h1 className="text-2xl text-center font-bold">{item.name}</h1>
            <p className="text-center font-semibold">{item.description}</p>
            <div className="product-quantity mt-5 mx-auto w-[70%]">
              <div>  
                <button onClick={() => {removeFromCart(item.id); notifyDeleteItem()}} className="cursor-pointer"><i className="fa-regular fa-trash-can"></i> Remove Item</button>
              </div>
              <p className="product-price text-xl font-semibold mt-5">
                ₱ {calculatePrice(quantity, item.price)}.00
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
