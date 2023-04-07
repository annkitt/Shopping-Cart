import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Navbar } from "./components/navbar"
import { ShoppingCartProvider } from "./context/shoppingcartcontext"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../src/components/storeItem"
import storeItems from "../src/data/items.json"

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-18">
      <h2>Specially Curated Books, Just For You<br />
        Best-Selling books are on sale. Updated hourly. 
    </h2>
      <br />
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map(item => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
      </Container>
    </ShoppingCartProvider>
  )
}

export default App