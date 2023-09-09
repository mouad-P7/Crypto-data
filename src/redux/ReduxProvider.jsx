"use client";

import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import mobileMenuReducer from './mobileMenu';
// import cryptoDataReducer from './cryptoData.js';


const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  }
});


export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
};
