import React from "react";
import style from "./Sidebar.module.css";
import {Bookmark,GroupAdd,Add} from "@material-ui/icons"
import { useSelector } from "react-redux";
import { Avatar} from "@material-ui/core";

const Sidebar = () => {
  const {user} = useSelector((state) => state.user);
  return (
    <div className={style.Sidebar}>
      <div className={style.container}>
        <img className={style.img}
        src="https://t3.ftcdn.net/jpg/03/19/00/58/360_F_319005824_sS4Tzx2QZ7WXqn8BP9yz0sFTyUnFEqbw.jpg" />
        <Avatar src={user.photoURL} className={style.avatar} />
        <h3 >{user.displayName}</h3>
        <br />
        <div className={style.connectbar}>
          <p>Connections<p className={style.invitations}>22</p></p>
          
          <GroupAdd  className={style.group}/>
          <p className={style.grouppara}>Grow your network</p>
          <br/>
          <p>Invitations<p className={style.invitations}>2</p></p>
        </div>
        <br />
        <div className={style.premiumbar}>
          <p>Access exclusive tools & insights</p>
          <ul className={style.ul}><li><p className={style.premiumpara}>Try Premium for free</p></li></ul>
        </div>
        <br />
        <div className={style.saveitem}>
          <Bookmark />
          <p>My items</p>
        </div>
      </div>

   
      <div className={style.bottom}>
      <div className={style.bottombox}>
        <div className={style.bottomsidebar}>
        <p>Groups</p>
            <p>Events <Add className={style.add}/></p>
           
            <p >Followed Hashtags</p>
        </div>
        <div className={style.discover}>
        <p >Discover more</p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;