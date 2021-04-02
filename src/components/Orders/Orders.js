import React, { useContext, useEffect, useState } from 'react';

import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Orders = () => {
const [products,setProducts]=useState([]);
const{_id}=useParams();
console.log(_id);
    useEffect(() => {
        fetch('https://vast-coast-02584.herokuapp.com/find/'+_id)
          .then((res) => res.json())
          .then((data) => setProducts(data[0]));
      },[_id]);
    

    
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const {price,name}=products;
     
     
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        
    
        const orderDetails={UserInfo:data,productsInfo:products,orderTime:new Date()};
        fetch('https://vast-coast-02584.herokuapp.com/addOrder',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
             alert('your order placed successfully.');
            }
        })

  
    }
        
    
   const style={width:'50%',padding:'15px',margin:'15px',marginLeft:'100px'}
    
    
    return (
        <div>
            <h2 style={{borderBottom:'2px solid black',color:'green'}}>Order </h2>
            <h3 >Hello {loggedInUser.name}.  </h3>
            
            <h3> product Name:{name}</h3>
            <h3> product price:${price}</h3>
            <br></br>
            <h2>Please Fill up this Form and Order : </h2>

              <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>


<input style={style} name="Name" defaultValue={loggedInUser.name} placeholder="Name" ref={register({ required: true })} />
<br></br>
<br></br>
{errors.exampleRequired && <span className="error">Name is Required</span>}

<input  style={style} name="Email" defaultValue={loggedInUser.email} placeholder="Email" ref={register({ required: true })} />
<br></br>
<br></br>
{errors.exampleRequired && <span className="error">Email is Required</span>}

<input  style={style} name="Address" placeholder="Address" ref={register({ required: true })} />
<br></br>
<br></br>
{errors.exampleRequired && <span className="error">Address is Required</span> }

<input style={style} name="phone number"placeholder="Contact Number" ref={register({ required: true })} />
<br></br>
<br></br>
{errors.exampleRequired && <span className="error">Contact Number is Required</span>}

<input style={{width:'320px',backgroundColor:'black',color:'white',borderRadius:'10px',marginLeft:'300px'}} type="submit" value="Order Here" />
</form>
            
        </div>
    );
};

export default Orders;