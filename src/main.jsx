import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import AuthProvider from './Component/AuthProvider.jsx';
import Login from './Component/Login';
import Register from './Component/Register';
import HomeView from './Component/HomeView';
import AddedToy from './Component/AddedToy';
import PrivetRout from './Component/PrivetRout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<HomeView></HomeView>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:"register",
        element:<Register></Register>
      },
      {
        path:'addToy',
        element:<PrivetRout><AddedToy></AddedToy></PrivetRout>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
