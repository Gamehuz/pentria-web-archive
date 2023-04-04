import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  space: {},
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    setSpace: (state, action) => {
      state.space = action.payload;
    },
  },
});

export const { setSpace } = spaceSlice.actions;

export default spaceSlice.reducer;
