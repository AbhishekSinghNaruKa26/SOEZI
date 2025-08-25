import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WishlistProvider } from './Context/WishListContext.jsx'  // <- import kar

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>    {/* ✅ Wrap kar diya */}
      <App />
    </WishlistProvider>
  </StrictMode>
)
