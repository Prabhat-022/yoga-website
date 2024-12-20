import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./component/Index"
import Account from "./component/Account"
import Cart from "./component/Cart"
import Products from "./component/Products"
import { useState, useEffect } from "react"
import Login from "./pages/Login"
import Register from "./pages/Reigister"
import { Toaster } from 'react-hot-toast'
import EditProfile from "./component/EditProfile"
import Admin from "./component/Admin/Admin"
import Blog from "./component/Blog/Blog"
import CreateArticle from "./component/CreatearticleDashboard.jsx/CreateArticle"


const App = () => {

  const [darkMode, setDarkMode] = useState(false)


  useEffect(() => {
    // Check system preference on mount
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Index darkMode={darkMode} setDarkMode={setDarkMode} />} />
          <Route path="/account" element={<Account darkMode={darkMode} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/create-article" element={<CreateArticle />} />
          
          
          <Route path="/admin" element={<Admin darkMode={darkMode} setDarkMode={setDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
