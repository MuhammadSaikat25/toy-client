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
import MyToy from './Component/MyToy';
import AllToy from './Component/AllToy';
import SubView from './Component/SubView';
import Update from './Component/Update';
import ErrorPage from './Component/ErrorPage';
import Blog from './Component/Blog';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      // errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'myAdd',
        element:<PrivetRout><MyToy></MyToy></PrivetRout>
      },
      {
        path:"allToy",
        element:<AllToy></AllToy>
      },
      {
        path:'subDetails/:id',
        element:<PrivetRout><SubView></SubView></PrivetRout>,
        loader:({params})=>fetch(`https://toy-hub-brown.vercel.app/getById/${params.id}`)
      },
      {
        path:'update/:id',
        element:<Update></Update>,
        loader:({params})=>fetch(`https://toy-hub-brown.vercel.app/getById/${params.id}`)
      },
      // {
      //   path:'*',
      //   element:<ErrorPage></ErrorPage>
      // },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  },
  {
    path:'*',
     element:<ErrorPage></ErrorPage>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
