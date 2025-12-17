import React from "react";
import { Base_Api } from "../../../Contexto/baseapi/BaseApi";
import type { UserTypes } from "../types/user.types";

type arrow = {
  name: string;
  lastname: string;
};


export const BaseapiGetuser = Base_Api.injectEndpoints({
  endpoints: (builder) => ({
    getuser: builder.query<UserTypes[], void>({
      query: () => "/users",
    }),


    PostMutataticon: builder.mutation<UserTypes, arrow>({
      query: (data: arrow) => ({
        url: `createrecursos`,
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const { useGetuserQuery, usePostMutataticonMutation } = BaseapiGetuser;
