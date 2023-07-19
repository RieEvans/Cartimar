import React from "react";
import { AllProducts } from "./Products";
import { Link } from "react-router-dom";

export const RainySeasonProduct = () => {
  const filterProductRainy = AllProducts.filter(
    (rainyItems) => rainyItems.id >= 17
  );
  return (
    <section>
        <h1 className="font-bold text-2xl text-slate-900 tracking-wide">Products for this Rainy Season</h1>
      <main className="my-5 flex gap-2 border-2 overflow-auto">
        {filterProductRainy.map((rainyItems) => {
          return (
            <Link to={`/categories/product/${rainyItems.id}`} className="border-2 " key={rainyItems.id}>
              <div className="w-[295px]">
                <img className="w-full h-full object-cover" src={rainyItems.img} alt="" />
              </div>
            </Link>
          );
        })}
      </main>
    </section>
  );
};
