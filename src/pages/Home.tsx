import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/storeItem"
import storeItems from "../data/items.json"

export function Home() {
  return (
    <>
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
    </>
  )
}