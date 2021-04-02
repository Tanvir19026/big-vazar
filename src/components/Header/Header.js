import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const styles ={
        height:'100px',
        marginRight:'25px',
        marginTop:'50px',
        fontSize:'20px',
        color:'black',
        textDecoration:'none',
        fontweight:'600'
    }
    const styleBackground ={backgroundColor:'lightgrey'}

   const StyleName={color:'red',
   fontSize:'40',
   marginLeft:'30px',
   marginTop:'50px',

}



  return (
    <div className="row" style={styleBackground}>
      <div className=" d-flex col-md-6">
        <h1 style={StyleName}>Big Bazar</h1>
      </div>
      <div className=" d-flex col-md-6" >
        
            <Link style={styles}to="/home">Home</Link>
          
        
            <Link style={styles} to="/Admin">Admin</Link>
         
 
            <Link  style={styles} to="/Orders/:_id">Orders</Link>
          
   
            <Link  style={styles} to="/LogIn">LogIn</Link>

            <Link  style={styles} to="/LogIn">{loggedInUser.name}</Link>
       
     
      </div>
    </div>
  );
};

export default Header;
