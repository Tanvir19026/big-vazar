import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ProductDetails from '../ProductDetails/ProductDetails';
import {Spinner} from 'react-bootstrap';
const Home = () => {
    const [products,setproducts]=useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
useEffect(()=>{
  const url=`https://vast-coast-02584.herokuapp.com/events`
  fetch(url)
  .then(res=> res.json())
  .then(data=>setproducts(data));
  
},[])

const style={backgroundColor:'black'}

    return (
        <div className="row" style={style}>
           {
               products.length===0 &&  <Spinner style={{marginLeft:'50x',width:'100px',height:'100px'}} animation="border" variant="warning" />
           }
            
            {
                    products.map(product=><ProductDetails product={product}></ProductDetails>)
            }
        </div>
    );
};

export default Home;