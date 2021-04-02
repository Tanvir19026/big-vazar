
import React, { useContext } from 'react';
import {Card,Button} from 'react-bootstrap'
import { useHistory } from 'react-router';
import { UserContext } from '../../App';

const ProductDetails = (props) => {
  const {name,price,imageUrl,_id}=props.product; 
  const history=useHistory(); 

  const [loggedInUser, setloggedInUser] = useContext(UserContext);
       
  const handleBuyProducts=(_id)=>{
     const url=`/events/${_id}`;
     history.push(url);

  }
  
    return (
        <div  className="col-md-4 mt-5 ">
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={imageUrl}/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <div className=" d-flex ">
    <h3>${price}</h3>
 
    <Button style={{marginLeft:'35px'}} variant="primary" onClick={()=>handleBuyProducts(_id)}>Buy Now</Button>
    </div>
   
  </Card.Body>
</Card>
        </div>
    );
};

export default ProductDetails;