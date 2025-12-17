import React, { use, useEffect, useState } from "react";
import {
  Base_Api,
  //   useGetUserplaceholderQuery,
} from "../../../Contexto/baseapi/BaseApi";
import {
  BaseapiGetuser,
  useGetuserQuery,
  usePostMutataticonMutation,
} from "../api/Userapi";
import type { UserTypes } from "../types/user.types";
import { getcursosApi } from "../../cursos/api/CursosApi";
import Cursos from "../../cursos/componente/cursos";
import Inputbusquedad from "./Inputbusquedad";

let local = localStorage.getItem("Userlist");
let dato: UserTypes[] | null = null;
if (local) {
  dato = JSON.parse(local) as UserTypes[];
}

export const Userlist = () => {
  const { data, isError, isLoading } = BaseapiGetuser.useGetuserQuery();
  const [createCurso, { isLoading: postcgarnado }] =
    BaseapiGetuser.usePostMutataticonMutation();
  const [Post, setPost] = useState(false);
  const [estado, setEstado] = useState<UserTypes>({} as UserTypes);
  const [form, setform] = useState("");
  const [Loclstorgeo, setlocalsotrae] = useState<UserTypes[]>(dato || []);

  const filteruser = estado;

  const usehoverconvertring = (item: UserTypes) => {
    setPost(!Post);
    let Offsetindex = Loclstorgeo.find(
      (Res, index) => Res.email === item.email
    );
    if (!Offsetindex) {
      setlocalsotrae([...Loclstorgeo, item]);
    }
    setEstado(item);
  };

  useEffect(() => {
    localStorage.setItem("Userlist", JSON.stringify(Loclstorgeo));
  }, [Loclstorgeo]);

  useEffect(() => {
    console.log(estado.dni);
  }, [estado]);

  const PadreDetails = (vari: string) => {
    setform(vari);
  };

  const filtror = data?.filter((item, index) =>
    item.email.toLocaleLowerCase().includes(form)
  );
  const ClickBusquedad = () => {
    console.log("Referencia ");
  };
  const FomrularioDebusquead = form != "" ? filtror : data;

  const EnviarData = async () => {
    let data = await createCurso({
      lastname: "",
      name: "",
    }).unwrap();
  };

  return (
    <>
      <button
        onClick={() => setPost(!Post)}
        className="p-2 bg-black text-white rounded-md  p-2 m-2 cursor-pointer"
      >
        Back
      </button>
      <Inputbusquedad PadreDetails={PadreDetails}></Inputbusquedad>

      {!Post ? (
        <div className="grid  grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-3 w-[80%] mx-auto">
          {isLoading ? (
            <h1>Cargando</h1>
          ) : FomrularioDebusquead?.length === 0 ? (
            <h1>Datos no encontrados .....</h1>
          ) : (
            FomrularioDebusquead?.map((item, index) => {
              return (
                <div
                  onClick={() => usehoverconvertring(item)}
                  className="border p-2   
        
                rounded-md border-gray-200 text-gray-700 hover:bg-blue-700 hover:text-white hover:border-blue-300  translate-px duration-300 cursor-pointer"
                  key={index}
                >
                  <h1>{item.id}</h1>
                  <h1>{item.dni}</h1>
                  <h1>{item.nombre}</h1>
                  <h1>{item.email}</h1>
                </div>
              );
            })
          )}
        </div>
      ) : (
        <Cursos name={estado.id}></Cursos>
      )}
    </>
  );
};

export default Userlist;
