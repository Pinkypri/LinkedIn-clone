import React from "react";
import Login from "../Login/Login";
import { useSelector } from "react-redux";
import styles from "../../App.module.css"
import Header from "../../Components/Header/Header"
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import Add from "../../Components/Add/Add"

const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div className={styles.app}>
       { !user ? (<Login/>):
       (
           <>
          <Header/>
           <div className={styles.app_body}>
           <Sidebar/>
     
           <Feed/>
           <Add/>
           </div>
          
           </>
       )}
    </div>
)
};

export default Home;