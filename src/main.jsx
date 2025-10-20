import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryProvider } from './context/QueryContext.jsx'
import {FloorProvider} from "./context/FloorContext.jsx"
import { PathProvider } from './context/PathContext.jsx'
import { CategoryProvider } from './context/CategoryContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <QueryProvider>
       <FloorProvider>
        <PathProvider>
          <CategoryProvider>
                  <App />
           </CategoryProvider>
      </PathProvider>
      </FloorProvider>
     </QueryProvider>
    </BrowserRouter>
  </StrictMode>,
)
