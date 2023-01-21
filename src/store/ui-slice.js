import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartIsVisiable: false };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    togleUi(state) {
      state.cartIsVisiable = !state.cartIsVisiable;
    },
  },
});

export const {togleUi} = uiSlice.actions;

export default uiSlice.reducer;
