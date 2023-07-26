import React from "react";

export const DeliveryDetails = () => {
  return (
    <div className="flex flex-col  border p-2 rounded-xl mt-5">
      <div className="flex items-start gap-2 border-b p-2">
        {" "}
        {/* Delivery */}
        <div>
          <i className="fa-solid fa-truck-fast"></i>
        </div>
        <div>
          <h1 className="font-bold text-[16px]">Delivery</h1>
          <p className="font-semibold">🟢 Available</p>
          <span className="text-gray-500">See options at checkout</span>
        </div>
      </div>
      <div className="flex items-start gap-2 p-2">
        {" "}
        {/* Location */}
        <div>
          <i className="fa-solid fa-location-arrow"></i>
        </div>
        <div>
          <h1 className="font-bold">Pasay City</h1>
          <p className="font-semibold">🟢 Store -In stock</p>
        </div>
      </div>
    </div>
  );
};
