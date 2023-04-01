import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/shoppingcartcontext"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App