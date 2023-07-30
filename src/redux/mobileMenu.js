import { createSlice } from "@reduxjs/toolkit";


const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState: {isMenuOpen: false},
  reducers: {
    toggleMobileMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
  }
});


export default mobileMenuSlice.reducer;
export const { toggleMobileMenu } = mobileMenuSlice.actions;
