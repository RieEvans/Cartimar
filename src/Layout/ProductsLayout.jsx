import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ProductsLayout = () => {
  const [itemName, setItemName] = useState("All Items");
  const handleItemName = (e) => {
    setItemName(e);
  };

  return (
    <section className="mt-40 mx-auto md:w-[80%] sm:w-[90%]">
      <h1 className="font-bold text-3xl text-center">{itemName}</h1>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-10">
        <NavLink
          to="allproducts"
          onClick={() => handleItemName("All Items")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
            <i className="fa-solid fa-border-all"></i>
          All
        </NavLink>
        <NavLink
          to="bathroom-accesories"
          onClick={() => handleItemName("Bathroom Accesories")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
          <i className="fa-solid fa-toilet"></i>
          Bathroom
        </NavLink>
        <NavLink
          to="kitchen"
          onClick={() => handleItemName("Kitchen")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
          <i className="fa-solid fa-kitchen-set"></i>
          Kitchen
        </NavLink>
        <NavLink
          to="furnitures"
          onClick={() => handleItemName("Furnitures")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
          <i className="fa-solid fa-chair"></i>
          Furnitures
        </NavLink>
        <NavLink
          to="tech"
          onClick={() => handleItemName("Tech")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
          <i className="fa-solid fa-microchip"></i>
          Gadgets
        </NavLink>
        <NavLink
          to="chairs"
          onClick={() => handleItemName("Chairs")}
          className={`px-2 w-[100px] h-[55px] flex flex-col items-center justify-center text-center bg-slate-900 text-white rounded-md shadow-md focus:bg-white focus:text-slate-900 hover:bg-white hover:text-slate-900 hover:scale-105 transition`}>
          <i className="fa-solid fa-chair"></i>
          Chairs
        </NavLink>
      </div>
      
      <Outlet />
    </section>
  );
};
