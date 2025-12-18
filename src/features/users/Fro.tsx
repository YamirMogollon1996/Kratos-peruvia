import React from "react";

const detalle = [
  {
    id: 1,
    numero: 10,
    email: "senior@gamial.com",
  },
];
const Fro = () => {
  return (
    <>
      <div>Fro</div>

      <div>
        {detalle.map((item, index) => {
          return (
            <div>
              <h1>{item.numero}</h1>
              <h1>{item.email}</h1>
              <h1>{item.id}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Fro;
