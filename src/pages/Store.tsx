import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"
import { Navbar } from "../components/Navbar"
import { useNavigate } from "react-router-dom"

export function Store() {

  const navigate = useNavigate()
  if(!localStorage.getItem("username")){ navigate('/') }

  return (
    <>
      <Navbar />
      <h1>Store</h1>
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
