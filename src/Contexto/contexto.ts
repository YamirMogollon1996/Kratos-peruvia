import { createAction, createSlice, configureStore } from "@reduxjs/toolkit";
import { Base_Api } from "./baseapi/BaseApi";


export const store = configureStore({
  reducer: {
    [Base_Api.reducerPath]: Base_Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Base_Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatach = typeof store.dispatch;
