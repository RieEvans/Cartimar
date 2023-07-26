import React, { createContext, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AllProducts } from "../components/Products";
import { RainySeasonProduct } from "../components/RainySeasonProduct";
import { DeliveryDetails } from "../components/Delivery-Details";

export const CartContext = createContext();

export const ProductPage = () => {
  const { id } = useParams();
  const item = AllProducts.filter((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState(item[0].img);

  const { addToCart, notify } = useContext(CartContext);
  //const price = item ? item[0].price : 0
  const calculatePrice = () => {
    return quantity * item[0].price;
  };

  return (
    <>
      <div className="flex items-center sm:text-[11px] md:text-sm mt-28 gap-5 mx-auto md:w-[80%] sm:w-[90%] font-bold tracking-wide relative border-b border-slate-900 pb-1">
        <h1>Offers & Promotions</h1>
        <h1>Everyday essentials under ₱200</h1>
        <h1>Last Chance</h1>
      </div>
      <section className="my-20 mx-auto md:w-[80%] sm:w-[90%] relative">
        <main className="xl:flex  gap-5 ">
          <div className="left-item w-full xl:flex xl:flex-row-reverse gap-2 items-center justify-center overflow-hidden ">
            <div className="w-full h-full">
              <img className="w-full h-full object-cover " src={image} alt="" />
            </div>
            <div className="flex xl:flex-col items-center y gap-2 mt-2">
              <div className="w-[150px] h-[150px]">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={(e) => setImage(e.target.src)}
                  src={item[0].img}
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[150px]">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={(e) => setImage(e.target.src)}
                  src={item[0].OtherImg[0]}
                  alt=""
                />
              </div>
              <div className="w-[150px] h-[150px]">
                <img
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={(e) => setImage(e.target.src)}
                  src={item[0].OtherImg[1]}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right-item w-full bg-white py-10 sm:mt-10 xl:mt-0 ">
            <h1 className="text-center font-bold tracking-wide text-2xl">
              {item[0].name}
            </h1>
            <div className="m-auto sm:w-[90%] md:w-[80%]  ">
              <h1 className="font-semibold tracking-wide text-xl">
                {item[0].category}
              </h1>{" "}
              {/* Details of ITEMS */}
              <p>{item[0].description}</p> {/* Details of ITEMS */}
              <div className="product-quanity mt-10 flex items-center justify-between ">
                {" "}
                {/* SET QUANTITY OF ITEMS  */}
                <h1 className="text-md font-semibold ">Items</h1>
                <div className="flex gap-2">
                  <button
                    disabled={quantity <= 1}
                    className="bg-zinc-100 px-2 py-1 text-md flex justify-center items-center active:opacity-75"
                    onClick={() => setQuantity(quantity - 1)}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <p className="text-md px-5 py-1 text-center border">
                    {quantity}
                  </p>
                  <button
                    className=" px-2 py-1 text-md flex justify-center items-center active:opacity-90"
                    onClick={() => setQuantity(quantity + 1)}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <p className="product-price text-md font-semibold">
                  ₱ {calculatePrice(quantity)}.00
                </p>
              </div>
              {/* BUTTONS FOR CART */}
              <div className="flex justify-center gap-2 items-center mt-10">
                <button
                  onClick={() => {
                    addToCart(item[0]);
                    notify();
                  }}
                  className="bg-slate-900 text-white px-5 py-1 rounded active:bg-black hover:bg-slate-800 sm:text-md md:text-xl">
                  Add to Cart
                </button>
                <button className="px-5 py-1 bg-zinc-100 sm:text-md md:text-xl">
                  Check Out
                </button>
              </div>
              <DeliveryDetails />
            </div>
          </div>
        </main>

        <main className="mt-10">
          <RainySeasonProduct />
        </main>
      </section>
    </>
  );
};
