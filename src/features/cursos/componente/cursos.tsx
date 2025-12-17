import React from "react";
import { Base_Api } from "../../../Contexto/baseapi/BaseApi";
import { getcursosApi } from "../api/CursosApi";

interface Iddefined {
  name: number;
}

const Cursos = ({ name }: Iddefined) => {
  const { isError, data, isLoading } = getcursosApi.useGetPostQuery(name, {
    refetchOnMountOrArgChange: true,
  });
  // console.log(data);
  return (
    <>
      {isLoading ? (
        <h1>Cargando ..........</h1>
      ) : (
        <div className="w-[80%] mx-auto">
          <h1>{JSON.stringify(data)}</h1>
        </div>
      )}
    </>
  );
};

export default Cursos;
