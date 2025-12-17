import React, { useState } from "react";
import { CiWifiOn } from "react-icons/ci";

interface FronteBails {
  PadreDetails: (item: string) => void;
}

const Inputbusquedad = ({ PadreDetails }: FronteBails) => {
  const handleChanugue = (e: React.ChangeEvent<HTMLInputElement>) => {
    PadreDetails(e.target.value);
  };
  return (
    <>
      <div className="mx-auto relative text-center  w-[80%]">
        <input
          placeholder="busquedad por nombre"
          onChange={handleChanugue}
          className="p-2  border-2   
          
          m-5 mx-auto hover:shadow-2xl w-full rounded-md border-gray-300 hover:border-blue-600 outline-0"
        ></input>
        <CiWifiOn className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-600"></CiWifiOn>
      </div>
    </>
  );
};

export default Inputbusquedad;
