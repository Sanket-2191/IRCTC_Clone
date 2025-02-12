import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TrainContextProvider } from './contexts/Traincontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {console.log("in main")
    }
    <TrainContextProvider>
      {console.log("in contextprovider")
      }
      <App />
      {console.log("in contextprovider after App")
      }
    </TrainContextProvider>
  </React.StrictMode>
)
