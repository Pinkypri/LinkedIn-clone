import React, { useState, useEffect } from "react";
import {ExpandMoreSharp} from "@material-ui/icons"
import MessageSender from "../MessageSender/MessageSender";
import { db } from "../../Firebase/firebase";
import Post from "../Post/Post";
import style from "./Feed.module.css";

const Feed = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapShot) => {
        setPost(
          snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <div className={style.feed}>
    <MessageSender/>
    <div className={style.linetop}>
    <div className={style.line}>
    </div>
    <div className={style.linepara}>
    <p style={{color:"gray"}}>Sort by:</p>
    Top<ExpandMoreSharp fontSize="large" className={style.bordertop}/>
    </div>
    </div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
