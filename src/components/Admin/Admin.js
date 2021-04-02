
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const [imageUrl,setImageUrl]=useState(null);
    const onSubmit = data => {
    const newUser={...loggedInUser};
     const  eventData={
       name:data.name,
       imageUrl:imageUrl,
       price:data.price,
       email:loggedInUser.email
     };
     const url=`https://vast-coast-02584.herokuapp.com/addEvent`;
     console.log(eventData);
    fetch(url,{
     method: 'POST',
     headers: {'content-Type':'application/json'},
     body: JSON.stringify(eventData)

    })
    .then(res=> console.log('response success',res))
    


    };
     const handleImageUpload=(event)=>{
         console.log(event.target.files[0]);
         const imageData=new FormData();
         
         imageData.set('key','f2b298920a0d9c55d28c541bcd520dcb');
         imageData.append('image',event.target.files[0]);
          
         axios.post('https://api.imgbb.com/1/upload', 
           imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });

     }
     const styleManageproduct={fontSize:'30px',margin:'20px',backgroundColor:'black',textDecoration:'none'}
    return (
       
      <div>
                  <p>click ManageProduct for ManageYourProduct...</p>
                    <Link style={styleManageproduct}   to="/ManageProduct">ManageProduct</Link>
                  
                  <h1 style={{marginTop:'100px'}}>Add Product</h1>
           <form onSubmit={handleSubmit(onSubmit)}>

               <label>Product Name</label>
           <br></br>
       <input name="name" defaultValue="Rice" ref={register} />
       <br></br>
    
     <label>Product PRICE</label>  
     <br></br>

     <input name="price" defaultValue="300" ref={register} />
       <br></br>

      <label>Product Image</label>
      <br></br>
      
  
      <input name="exampleRequired" type="file" onChange={handleImageUpload}/>
      <br></br>

      {errors.exampleRequired && <span>This field is required</span>}
      <br></br>

      <input style={{backgroundColor:'grey',color:'black',padding:'5px 10px',borderRadius:'10px'}}  type="submit" />
    </form>
        </div>
    );
};

export default Admin;