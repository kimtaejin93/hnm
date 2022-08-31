import React from 'react'
import ProductCards from '../component/ProductCards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect,useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({checkIdentity}) => {
  const [productList,setProductList]=useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  const getProducts=async()=>{
    let search=searchParams.get("q");
    let url=(search==null?`https://my-json-server.typicode.com/kimtaejin93/hnm`:`https://my-json-server.typicode.com/kimtaejin93/hnm/products/?q=${search}`);
    let response=await fetch(url);
    let data=await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProducts()
  },[searchParams])  
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item)=>(<Col lg={3}><ProductCards item={item} checkIdentity={checkIdentity}/></Col>))}
          
                       
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll