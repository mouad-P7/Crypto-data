import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import mobileMenuReducer from './redux/mobileMenu';
import './variables.css';
import './global.css';


const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
