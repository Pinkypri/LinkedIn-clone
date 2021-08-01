import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../Store/actions/user";
import styles from "./Login.module.css"

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
      console.log(result);  
      dispatch(addUser(result))})
      
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.login}>
    <div className={styles.login_logo}>
      <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"/>
      <img  src="https://raw.githubusercontent.com/prakashvaithianathan/linkedIn-clone-react-firebase/c6d729bd598dc7e04162bc53b77c72ec41437a9c/src/images/login-logo.svg" alt="linkedin-font" />
       </div>
      <Button  onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;