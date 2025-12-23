import React, { useState } from "react";
import userCraeteuser from "./hook/userCraeteuser";

const detalle = [
  {
    id: 1,
    numero: 10,
    email: "senior@gamial.com",
  },
  {
    id: 1,
    numero: 10,
    email: "senior@gamial.com",
  },
  {
    id: 1,
    numero: 10,
    email: "senior@gamial.com",
  },
  {
    id: 1,
    numero: 10,
    email: "senior@gamial.com",
  },
];

const Fro = () => {


  const [estado, setestado] = useState("mogollonosorioyamir@gmail.com");
  const detallefilter = detalle.filter((item, index) => item.numero > 40);
  const filterdos = detalle.filter((item, index) => item.id === 24);
  const funcionaliddnueba = detalle.map(  (item, index) => item.email === "mogollonosorio@yamir.com");
  const funcionalidadit = detalle.map((item, index) => item.email === estado); 
  const   {Chanugelement ,ExportJugaite}  =  userCraeteuser()


  
  return (
    <>
    {
      JSON.stringify(ExportJugaite)
    }
      <div>Fro</div>
      <div>
        {detallefilter.map((item, index) => {
          return (
            <div>
              <h1
                className={`${index === 0 ? "bg-amber-100" : "bg-amber-300"} `}
              >
                {item.numero}
              </h1>
              <h1 className="confiifckdeveloper">{item.email}</h1>
              <h1 className="text-5xl bg-gray-200 italic  brandi lover">
                {item.email}
              </h1>
              <h1 className="bg-amber-400   flex items-center saturate-150  sonia gird grid-cols-3">
                {item.id}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Fro;
