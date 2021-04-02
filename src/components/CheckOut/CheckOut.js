import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import {Col,Row} from 'react-bootstrap'
import { Button } from "bootstrap";
import { UserContext } from "../../App";

const CheckOut = () => {
  const {_id} = useParams();
  console.log(_id);
  const [products, setProducts] = useState([]);
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  
  useEffect(() => {
    fetch('https://vast-coast-02584.herokuapp.com/events/'+_id)
      .then((res) => res.json())
      .then((data) => setProducts(data[0]));
  },[_id]);
  const quantity=1;
  const buttonStyle={margin:'10px',padding:'10px',borderRadius:'8px',color:'blue',fontSize:'20px',fontWeight:'600',backgroundColor:'gray'}
  const history = useHistory();
  const newUser ={...loggedInUser,...products};

 const handleCheckOut =()=>{
   const url=`/Orders/${_id}`;
   history.push(url);
 }

  return (
    <div>
       <h1 style={{color:'green'}}>CheckOut</h1>
    <div className="container mt-5 "  style={{borderBottom:'1px solid red', padding:'15px',margin:'10px'}}>
     
         <Row className="container mt-5">
    <Col><h4>Descripton</h4><strong style={{color:'grey'}}>{products.name}</strong></Col>
    <Col><h4>Quantity</h4><strong>{quantity}</strong></Col>
    <Col><h4>price</h4><strong style={{color:'red'}}>$:{products.price}</strong></Col>
    
    </Row>
    </div >
    
    <div className="container mt-2 ">
    <Row  className="container mt-2">
     
  <Col style={{color:'blue'}}><h3>Total</h3></Col>

  <Col style={{color:'red'}}><strong>$:{products.price}</strong></Col>
  
  </Row>

    </div>
    <Row>
    <Col></Col>
    <Col></Col>
    <Col><button style={buttonStyle}  onClick={()=> handleCheckOut()}>CheckOut</button></Col>
  </Row>

        
 
    </div>
  );
};

export default CheckOut;
