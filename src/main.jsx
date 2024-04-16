import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Main from './layout/Main.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Login/Register.jsx'
import AuthProvider from './components/providers/AuthProvider.jsx'
import Estate from './components/Estate/Estate.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import Details from './components/Estate/Details.jsx';
import PublicRoutes from './routes/PublicRoutes.jsx';
import Profile from './components/profile/Profile.jsx';
import ViewProfile from './components/profile/ViewProfile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:() => fetch('/data.json').then(response => response.json())

      },

     
      {
        path:'/login',
        element: <PublicRoutes><Login></Login></PublicRoutes>

      },
     
      {
        path:'/signup',
        element: <Register></Register>
      },
      
      {
        path:'/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes> 
      },
      {
        path:'/user',
        element: <PrivateRoutes><ViewProfile></ViewProfile></PrivateRoutes> 
      },


      {
        path:'/estate/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>
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
