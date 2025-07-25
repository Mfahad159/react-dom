import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Github from './components/Github/Github.jsx'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
const router=createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children: [

      {
        path: "",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
       {
        path:"github",
        element:<Github/>
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
