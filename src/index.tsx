import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  RouterProvider,
} from "react-router-dom";
import ContextProvider from './Context/Context';
import reportWebVitals from './reportWebVitals';
import router from './Routes/Routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextProvider>  
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
