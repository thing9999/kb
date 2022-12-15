import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './page/login'
import Policy from './page/policy';
import './common.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Init } from './page/init';


const router = createBrowserRouter([
  {
    path: "/init",
    element: <Init></Init>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/b",
    element: <Policy />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
