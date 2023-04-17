import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App"
import ErrorPage from './error-page'

import Login from "./components/LoadingPages/LoginCpn"
import Register from './components/LoadingPages/RegisterCpn';
import Item from './components/homeComponents/ItemCpn';
import Info from './components/homeComponents/infoCpn';
import Search from './components/homeComponents/searchCpn';


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/login",
    element: <Login />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/register",
    element: <Register />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/products/:id",
    element: <Item />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/info",
    element: <Info />,
    errorElement: <ErrorPage/>
  },
  {
    path:"/search",
    element: <Search />,
    errorElement: <ErrorPage/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);


