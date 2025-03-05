import React, { useState } from 'react'
import './App.css'
// import Login from './pages/login'
import Home from './pages/Home.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Navbar from './components/Navbar.jsx'
import Toast from './components/Toast.jsx'

function App() {
  // const [count, setCount] = useState(0)


  console.log("in app")

  // const Layout = () => (<>
  //   <Navbar />

  // </>)

  const routes = createBrowserRouter([
    {
      path: '/', element: <Navbar />,
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
      {/* <Toast msg={"Hi there!!"}></Toast> */}

    </>


  )
}

export default App
