import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import './index.css'

import App from './App.jsx'
import { AppProvider } from './Components/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
    <Router>
      <App />
    </Router>
    </AppProvider>
    
  </StrictMode>,
)
