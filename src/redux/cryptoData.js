import { createSlice } from "@reduxjs/toolkit";


const cryptoDataSlice = createSlice({
  name: "cryptoData",
  initialState: {cryptoData: []},
  reducers: {
    saveCryptoData(state, action) {
      state.cryptoData = action.payload;
    },
  }
});


export default cryptoDataSlice.reducer;
export const { saveCryptoData } = cryptoDataSlice.actions;
