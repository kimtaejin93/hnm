import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCards = ({item,checkIdentity}) => {
  const navigate=useNavigate();
    
    const goToLogin=()=>{
        navigate("/login");
    };
    const goToProductDetailPage=()=>{
      navigate(`/product/${item.id}`);
    }
  return (
    <div className="product-cards" onClick={checkIdentity?goToProductDetailPage:goToLogin}>
        <img className="product-image "src={item?.img}/>
        <div>Conscious choice</div>
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div>{item?.new==true?"신제품":""}</div>
    </div>
    )
}

export default ProductCards