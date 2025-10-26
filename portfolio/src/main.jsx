import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import Layout from './Layout/Layout.jsx'
import About from './components/about/About.jsx'
import Project from './components/Project/Project.jsx'
import Contect from './components/conteact/Contect.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"about",
        element:<About/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"contact",
        element:<Contect/>
      }
    ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
