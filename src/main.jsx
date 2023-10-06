import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Component/Route/Route';
import Home from './Component/Home/Home';
import Sajek from './Component/Sajek/Sajek';
import Sreemongol from './Component/Sreemongol/Sreemongol';
import Sundorbon from './Component/Sundorbon/Sundorbon';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'/sajek',
        element: <Sajek></Sajek>
      },
      {
        path:'/sreemongol',
        element: <Sreemongol></Sreemongol>
      },
      {
        path: '/sundorbon',
        element: <Sundorbon></Sundorbon>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
