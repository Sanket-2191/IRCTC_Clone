import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TrainContextProvider } from './contexts/Traincontext.jsx'
import { AuthContextProvider } from './contexts/AuthContext.jsx'
import { ToastContextProvider } from './contexts/ToastContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {console.log("in main")
    }<AuthContextProvider>
      <TrainContextProvider>
        <ToastContextProvider>
          {console.log("in contextprovider")
          }
          <App />
          {console.log("in contextprovider after App")
          }
        </ToastContextProvider>
      </TrainContextProvider>
    </AuthContextProvider>

  </React.StrictMode>
)
