import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../firebase.config"
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const LogIn = () => {
    
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);

    }
    const history = useHistory();
    const location =useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
         
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const googleprovider = new firebase.auth.GoogleAuthProvider()

        const [newuser,setNewUser] =useState(false);
        const [user, setUser] = useState({
          isSignedIn: false,
         
          email: '',
          photoURL: '',
          password: '',
          name: '',
          error: '',
          success:false
      
        })


        const handleSignIn = () => {
        firebase.auth()
          .signInWithPopup(googleprovider)
          .then(res => {
            const { displayName, email, photoURL } = res.user;
            const signedInUser = {
              isSignedIn: true,
              email: email,
              photoURL: photoURL,
              name: displayName
            }
            setUser(signedInUser);
            setloggedInUser(signedInUser);
            history.replace(from);
           
          })
    
          .catch(error => {
            console.log(error);
            console.log(error.message)
          })
    
      }
      const handleSignOut=() => {
        firebase.auth().signOut()
        .then( res=> {
    
          const signedOutUser = {
            isSignedIn: false,
            email: '',
            photoURL: '',
            name: ''
          }
         setUser(signedOutUser);
        })
        .catch(error =>
        {
          console.log(error);
        })
    
      }


    return (
        <div>
              <div class="d-flex justify-content-center googlebtn">
            {
                user.isSignedIn ? <button onClick={handleSignOut}> Sign Out</button> :
                <button onClick={handleSignIn}>Sign In with Google</button>
           }
           
            </div>
          
        </div>
    );
};

export default LogIn;