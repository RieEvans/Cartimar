import React from "react";
import { AllProducts } from "./Products";
import { Link } from "react-router-dom";

export const RainySeasonProduct = () => {
  const filterProductRainy = AllProducts.filter(
    (rainyItems) => rainyItems.id >= 17
  );

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 310;

  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 310;

  };

  const handleDragCapture = (e) => {
    slideLeft(e)
    slideRight(e)
  }

  return (
    <section className="relative ">
        <h1 className="font-bold text-2xl text-slate-900 tracking-wide">Products for this Rainy Season</h1>
      <main id="slider" className="my-5 flex gap-2 overflow-auto scroll-smooth no-scrollbar cursor-grab  w-full">
        {filterProductRainy.map((rainyItems) => {
          return (
            <Link onDragCapture={handleDragCapture}  to={`/categories/product/${rainyItems.id}`} className="" key={rainyItems.id}>
              <div className="w-[297px]">
                <img className="w-full h-full object-cover" src={rainyItems.img} alt="" />
              </div>
            </Link>
          );
        })}
      </main>
      <div className="flex items-center justify-between w-full gap-1">
        <button id="left" onClick={slideLeft} className="bg-slate-900 rounded-[100%] absolute top-[50%] left-[-20px] text-white text-2xl px-3 py-1" ><i className="fa-solid fa-angle-left"></i></button>
        <button id="right" onClick={slideRight} className="bg-slate-900 rounded-[100%] absolute top-[50%] right-[-20px] text-white text-2xl px-3 py-1"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </section>
  );
};
