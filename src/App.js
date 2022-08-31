import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [checkIdentity,setCheckIdentity]=useState(false);
  useEffect(()=>{
    console.log("checkIdentity",checkIdentity);
  },[checkIdentity])
  return (
    <div>
      <Navbar checkIdentity={checkIdentity} setCheckIdentity={setCheckIdentity}/>
      <Routes>
        <Route path="/" element={<ProductAll checkIdentity={checkIdentity} />} />
        <Route path="/login" element={<Login setCheckIdentity={setCheckIdentity}/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
