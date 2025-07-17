import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import { RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children: [
      {
        path: "",
        element:<Home/>
      },{
        path:"/about",
        element:<About/>
      }
      ,{
        path:"/contact",
        element:<Contact/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
