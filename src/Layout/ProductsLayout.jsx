import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const ProductsLayout = () => {
  const [itemName, setItemName] = useState("All Items");
  const handleItemName = (e) => {
    setItemName(e);
  };

  return (
    <section className="mt-40">
      <h1 className="font-bold text-3xl text-center">{itemName}</h1>
      <div className="flex flex-wrap items-center justify-start gap-5 mt-10">
        <NavLink
          hrefLang="#home"
          to="allproducts"
          onClick={() => handleItemName("All Items")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          All
        </NavLink>

        <NavLink
          to="furnitures"
          onClick={() => handleItemName("Furnitures")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          Furnitures
        </NavLink>
        <NavLink
          to="skincare"
          onClick={() => handleItemName("Skincare")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          Skincare
        </NavLink>
        <NavLink
          to="kitchen"
          onClick={() => handleItemName("Kitchen")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          Kitchen
        </NavLink>
        <NavLink
          to="tech"
          onClick={() => handleItemName("Tech")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          Gadgets
        </NavLink>
        <NavLink
          to="chairs"
          onClick={() => handleItemName("Chairs")}
          className={`px-2 bg-slate-900 text-white rounded-sm shadow-md`}>
          Chairs
        </NavLink>
      </div>

      <Outlet />
    </section>
  );
};
