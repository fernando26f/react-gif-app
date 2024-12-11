import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles.css'
import { GitfExpertApp } from './GitfExpertApp'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitfExpertApp />
  </StrictMode>,
)
