import { configureStore } from "@reduxjs/toolkit";
import utilReducer from "./utils/UtilSlice";

const store = configureStore({
  reducer: {
    util: utilReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
