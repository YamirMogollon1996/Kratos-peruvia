import React from "react";

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

  const detallefilter =   detalle.filter((item , index)  => item.numero > 20)  

  return (
    <>
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
              <h1>{item.id}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fro;
