import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import utilReducer from "./utils/UtilSlice";

const store = configureStore({
  reducer: {
<<<<<<< HEAD
    util: utilReducer
=======
    util: utilReducer,
    user: userReducer,
>>>>>>> 7666fad81beb3630ed5209b90d5a44ee8d475c3e
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
