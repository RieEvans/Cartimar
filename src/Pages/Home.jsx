import React from "react";
import { Link } from "react-router-dom";
import { AllProducts } from "../components/Products";

export const Home = () => {
  const filterItems = AllProducts.filter((items) => items.id <= 8);
  return (
    <section className="mt-40">
      <div className="h-[100vh] grid md:grid-cols-2 xl:grid-cols-3 gap-2">
        <Link to={`categories/furnitures`} className="relative overflow-hidden col-span-2">
          <img
            className="w-full h-full object-cover "
            src="/product/furniture2.jpg"
          />
          <h1 className="absolute bottom-2 left-5 text-bold text-2xl text-white">
            Furnitures
          </h1>
        </Link>
        <Link to={`categories/skincare`} className="relative overflow-hidden row-span-2">
          <img
            className="w-full h-full object-cover"
            src="/product/skincare2.avif"
          />
          <h1 className="absolute bottom-2 left-5 text-bold text-2xl text-white">
            Skincare
          </h1>
        </Link>
        <Link to={`categories/kitchen`} className="relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/product/kitchen.jpg"
          />
          <h1 className="absolute bottom-2 left-5 text-bold text-2xl text-white">
            Kitchen
          </h1>
        </Link>
        <Link to={`categories/tech`} className="relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/product/gadgets.jpg"
          />
          <h1 className="absolute bottom-2 left-5 text-bold text-2xl text-white">
            Gadgets
          </h1>
        </Link>
      </div>

      <div className="mt-20">
        <h1 className="font-bold text-2xl text-slate-900">
          Top Furnitures this season
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
          {filterItems.map((items) => {
            return (
              <Link
                to={`/categories/product/${items.id}`}
                className="border-2 hover:border-slate-900 transition rounded-t-md"
                key={items.id}>
                <div className="h-[300px]">
                  <img
                    className="w-full h-full object-cover rounded-t-md"
                    src={items.img}
                    alt=""
                  />
                </div>

                <div className="p-2 flex flex-col">
                  <h1 className="font-semibold">{items.name}</h1>
                  <p>{items.description}</p>
                  <span>{items.price}</span>
                  <button className="bg-slate-900 text-white mt-2 rounded-md">
                    Add to Cart
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="my-20 ">
        <div className="flex bg-zinc-100 items-center py-10 h-[300px] overflow-hidden ">
          <div className=" w-full flex flex-col items-center ">
            <div className="mx-auto sm:w-[80%] md:w-[50%]">
              <h1 className="text-slate-900 font-bold text-3xl">
                Live Comfortably
              </h1>

              <p className="my-4 font-semibold">
                {" "}
                Products are all made to standard sizes so that you can mix and
                match them freely.
              </p>
              <Link to={`/categories/allproducts`} className="bg-slate-900 text-white px-2 py-2 rounded-md mt-2">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="w-full sm:hidden md:block">
            <div className="h-full w-full">
              <img
                className="w-full h-full object-cover"
                src="/product/furniture3.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
