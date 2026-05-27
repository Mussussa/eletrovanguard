import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' <-- REMOVIDO OU COMENTADO PARA RETIRAR O ERRO

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)