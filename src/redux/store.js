import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import utilReducer from "./utils/UtilSlice";

const store = configureStore({
  reducer: {
    util: utilReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
