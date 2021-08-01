import React, { useEffect, useState } from "react";
import style from "./MessageSender.module.css";
import { useSelector } from "react-redux";
import { Photo, YouTube, Event, Description } from "@material-ui/icons";
import { db, timestamp, storage } from "../../Firebase/firebase";
import { LinearProgress } from "@material-ui/core";

const MessageSender = () => {
  const {user} = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);

  const handlesubmit=(event)=>{
    console.log(event);
  event.preventDefault();
  const uploadTask=storage.ref(`images/${image.name}`).put(image);

  uploadTask.on("state_changed",
  (snapShot)=>{
         const progress=Math.round((snapShot.bytesTransferred/snapShot.totalBytes)*1000);
        setProgress(progress);
  },(error)=>{console.log(error);
  },()=>{
      storage.ref("images").child(image.name).getDownloadURL().then((url)=>{
          
  db.collection("posts").add({
      message:input,
      timestamp:timestamp,
      profilePic:user.photoURL,
      username:user.displayName,
      image:url,
  });
  setProgress(0);
  setInput("");
  setImage("");
     }).catch((error)=>{
         console.log(error);
     })
  })
  }
  return (
    <form>
      <div className={style.msg}>
        <div className={style.msgContainer}>
          <img src={user.photoURL} alt="logo" />

          <input
            type="text"
            onChange={(event) => setInput(event.target.value)}
            value={input}
            placeholder="Start a post"
          />
        </div>
       
          {progress > 0 && (
            <LinearProgress
              variant="determinate"
              value={progress}
              className={style.progress}
            />
          )}
        

        <div className={style.options}>
          <div className={style.photo}>
            <input
              type="file"
              id="file"
              accept="image/*"
              className={style.file}
              onChange={(event) => setImage(event.target.files[0])}
            />

            <label htmlFor="file" className={style.photo}>
              <Photo/>
              <p>Photo</p>
            </label>
          </div>
          <div className={style.video}>
            <YouTube/>
            <p>Video</p>
          </div>
          <div className={style.event}>
            <Event/>
            <p>Event</p>
          </div>
          <div className={style.desc}>
            <Description/>
            <p>Article</p>
          </div>
        </div>
      </div>
      <button onClick={handlesubmit} type="submit" className={style.submit}>
        Submit
      </button>
    </form>
  );
};

export default MessageSender