import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./features/space/spaceSlice";
import userReducer from "./features/user/userSlice";
import utilReducer from "./utils/UtilSlice";

const store = configureStore({
  reducer: {
    util: utilReducer,
    user: userReducer,
    space: spaceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
  devTools: true,
});

export const dispatch = store.dispatch;

export default store;
