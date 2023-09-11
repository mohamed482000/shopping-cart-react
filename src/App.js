import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer/Footer'
import Header from './Component/Header/Header'
import HomePage from './pages/Home/HomePage'
import About from './pages/About/About'
import Authors from './pages/authors/Authors'
import Cart from './pages/Cart/Cart'
import LogIn from './pages/Forms/LogIn'
import Register from './pages/Forms/Register'
import Contact from './pages/Contact/Contact'
import Book from './pages/Book/Book'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/authors" exact element={<Authors />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/login" exact element={<LogIn />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/book/:id" exact element={<Book />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
