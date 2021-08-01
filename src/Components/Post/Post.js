import React from 'react'
import style from './Post.module.css'
import { Avatar } from "@material-ui/core";
import {MoreHoriz,
    Textsms,
    NearMe,
    ThumbUp,
    ShareOutlined,} from '@material-ui/icons'

const Post = ({profilePic,image,username,timestamp,message}) => {
    console.log(profilePic);
    return (
    
        <div className={style.container}>
            <div className={style.postTop}>
                <Avatar src={profilePic} className={style.avatar}/>
                <div>
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toDateString()}</p>
                    <MoreHoriz className={style.dots}/>
                </div>
                </div>
                
                <div className={style.postBottom}>
              <p>{message}</p>
          </div>
          <div className={style.postImage}>
                   <img src={image} alt={message} className={style.mainImage} />
          </div>
          <div className={style.border}>

          </div>
          <div className={style.postOptions}>
                 <div className={style.postOption}>
                     <ThumbUp/>
                     <p>Like</p>
                 </div>
                 <div className={style.postOption}>
                          <Textsms/>
                          <p>Comment</p>
                 </div>
                 <div className={style.postOption}>
                   <ShareOutlined/>
                   <p>Share</p>
                 </div>
                 <div className={style.postOption}>
                 <NearMe/>
                     <p>Send</p>
                 </div>
          </div>
            
        </div>
    )
}

export default Post