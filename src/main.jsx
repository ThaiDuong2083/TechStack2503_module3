import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./context/ThemeContext.jsx";
import {AuthProvider} from "./context/AuthContext.jsx";
import {UserProvider} from "./context/UserContext.jsx";
import {CartProvider} from "./context/CartContext.jsx";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ThemeProvider>
          <AuthProvider>
              <UserProvider>
                  <CartProvider>
                      <App />
                  </CartProvider>
              </UserProvider>
          </AuthProvider>
      </ThemeProvider>
  </BrowserRouter>,
)
