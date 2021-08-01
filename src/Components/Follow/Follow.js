import React from 'react'
import style from "./Follow.module.css"
import {MoreHoriz} from "@material-ui/icons"
import { Avatar,Button} from "@material-ui/core"
import { useSelector } from "react-redux"

const Follow = () => {
    const { user } = useSelector((state) => state.user);
    return (
        <div className={style.container}>
            <div>
            <p style={{marginLeft:"80%"}}>Ad<MoreHoriz className={style.add}/></p>
            </div>
            <div>
            <p className={style.para}>Stay on top of marketing trends from LinkedIn<br/> Marketing Solutions</p>
           </div>
           <div className={style.follow} >
                <Avatar src={user.photoURL}  className={style.avatar}/>
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png"/>
            </div> 
            <h4 style={{color:"gray",fontSize:"medium",fontWeight:"600",textAlign:"center"}}>Follow LinkedIn Marketing Solutions</h4>
            <br/>
            <Button variant="outlined" color="primary" className={style.btn}>follow</Button>
        </div>
    )
}

export default Follow
