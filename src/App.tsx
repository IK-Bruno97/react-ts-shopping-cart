import { Login } from "./Login"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Container } from "react-bootstrap"
import "./Login.css";


function App() {
  return (
    <ShoppingCartProvider>
    <Container className="mb-4">
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  </ShoppingCartProvider>
  )
}

export default App
