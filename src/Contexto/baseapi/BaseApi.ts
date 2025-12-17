  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const Base_Api = createApi({  
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints :  () => ({}), 
  keepUnusedDataFor: 60
});


