import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  response: {
    message: "",
    type: "",
  },
  isLoading: false,
  toggleSidebar: false,
  searchQuery: "",
};

const UtilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    createResponse: (state, action) => {
      state.response = {
        message: action.payload.message,
        type: action.payload.type,
      };
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setToggleSidebar: (state, action) => {
      state.toggleSidebar = action.payload;
    },
  },
});

export const { setLoading, createResponse, setToggleSidebar, setSearchQuery } =
  UtilSlice.actions;

export default UtilSlice.reducer;
