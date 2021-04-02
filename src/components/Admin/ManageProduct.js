import React, { useContext, useEffect, useState } from "react";
import {Button} from 'react-bootstrap'
import { useParams } from "react-router";
import { UserContext } from "../../App";

const ManageProduct = () => {
    const [products,setproducts]=useState([]);
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    
    const deleteProduct=(id)=>{

      fetch(`https://vast-coast-02584.herokuapp.com/delete/${id}`,{
        method: 'DELETE',

      })
      .then(res=> res.json())
      .then(result =>{
        if(result)
        {
          alert('delete ok')
        
        }
      })
      console.log(id);
    }

    useEffect(()=>{
      const url=`https://vast-coast-02584.herokuapp.com/events`
      fetch(url)
      .then(res=> res.json())
      .then(data=>setproducts(data));
      
      
    },[]);

    

    
  return (
    <div>
        
      {
                    products.map(product=><h4><p>Product Name:{product.name}</p><p>Price :${product.price} </p>
                    <Button variant="primary" onClick={()=> deleteProduct(product._id)}>Remove</Button></h4>)
     }

    </div>
  );
};

export default ManageProduct;
