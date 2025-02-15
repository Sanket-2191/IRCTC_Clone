import React, { useState } from 'react'
import './App.css'
// import Login from './pages/login'
import Home from './pages/Home.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  // const [count, setCount] = useState(0)


  console.log("in app")

  const Layout = () => (<>
    <Navbar />
    <div className='m-5 flex flex-col justify-center items-center'>
      <Outlet />
    </div>
  </>)

  const routes = createBrowserRouter([
    {
      path: '/', element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Register /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />

    </>


  )
}

export default App
