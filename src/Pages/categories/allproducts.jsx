import React, { useContext } from "react";
import { AllProducts } from "../../components/Products";
import { Link } from "react-router-dom";
import { CartContext } from "../ProductPage";

export const All = () => {
  const {addToCart, notify} = useContext(CartContext);
  
  return (
    <>
      <div className=" mt-5 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {AllProducts.map((items) => {
          return (
            <div
              className="bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] pb-2 rounded-xl"
              key={items.id}>
              <Link to={`/categories/product/${items.id}`}>
                <div className="h-[300px]">
                  <img
                    className="w-full h-full object-cover rounded-t-md"
                    src={items.img}
                    alt=""
                  />
                </div>
              </Link>

              <div className="p-2 flex flex-col">
                <h1 className="font-semibold">{items.name}</h1>
                <p>{items.description}</p>
                <span className="font-bold">₱{items.price}.00</span>
                <button
                  onClick={() => {addToCart(items); notify()}}
                  className="bg-slate-900 text-white py-1 mt-2 ">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
