import React  from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { Container,Col,Row,Dropdown } from 'react-bootstrap';

const ProductDetail = () => {
  let id=useParams();
  const [productNum,setProductNum]=useState(null);
    const getProductDetail=async ()=>{
    let url=`https://my-json-server.typicode.com/kimtaejin93/hnm/products/${id.id}`;
    let response=await fetch(url);
    let data=await response.json();
    setProductNum(data);
    
    }

  useEffect(()=>{getProductDetail()},[])
  return (
    
      <Container>
      <Row>
        <Col className='product-img'>
          <img src={productNum?.img}/>
        </Col>
        <Col>
          <div>
            {productNum?.title}
          </div>
          <div>
            \{productNum?.price}
          </div>
          <div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              사이즈선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>S</Dropdown.Item>
              <Dropdown.Item>M</Dropdown.Item>
              <Dropdown.Item>L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </div>
        </Col>
      </Row>
    </Container>
    
  )
}

export default ProductDetail