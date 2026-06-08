import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './pages/navbar/component'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/component'
import Products from './pages/products/component/products'
import Product from './pages/products/component/productDetail'
import Footer from './pages/footer/component'
import Cart from './pages/cart/component'
import Wish from './pages/wishLIst/component'
import Contact from './pages/contact/component'
import About from './pages/about/component'
import FAQ from './pages/faq/component'
import Register from './pages/user/component'

// App is the root component for the application UI.
// It renders the global navigation and footer around page routes.
// Each route maps to a page component representing a different app section.




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* The navbar and footer are always shown around route content. */}
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer></Footer>

    </>
  )
}

export default App
