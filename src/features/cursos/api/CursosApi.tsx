import React from "react";
import { Base_Api } from "../../../Contexto/baseapi/BaseApi";
import type { CursosTypes } from "../types/Cursos";

export const getcursosApi = Base_Api.injectEndpoints({
  endpoints: (builder) => ({
    getPost: builder.query<CursosTypes[], number>({
      query: (id: number) => `usuarios/${id}`,
    }),
  }),
});

export const { useGetPostQuery } = getcursosApi;
