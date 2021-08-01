import React from "react";
import style from "./Add.module.css";
import Widget from "../Widget/Widget";
import Follow from "../Follow/Follow"
import {FeedbackOutlined,ExpandMoreSharp, ArrowForwardOutlined} from "@material-ui/icons"

const Ads = () => {
  return (
    <div className={style.container}>
      <Widget
        title="LinkedIn News"
        img ={<FeedbackOutlined/>}
        topic1="It's 10 pm, don't text me maybe?"
        date1="3d ago . 10,576 readers"
        topic2="Cognizant has an attrition problem"
        date2="1d ago . 10,548 readers"
        topic3="A new airline is coming"
        date3="3d ago . 18,724 readers"
        topic4="Carreer switch: What stops you?"
        date4="3d ago .14,851readers"
        more="Show more"
        down={<ExpandMoreSharp/>}
      />
    
      <Widget
        title="Today's top courses"
        img={<FeedbackOutlined/>}
        topic1="The Surprising Upside of Procrastination"
        date1="Macmillan Publishers and Modern Mentor"
        topic2="Think Like a Lawyer to Make Decisions and Solve Problems"
        date2="Kim Wehle"
        topic3='Sharing Your Best Self at Work'
        date3='Carolyn Goerner'
        topic4='Full Stack Web Development'
        date4='joes'
        more='Show more on LinkedIn Learning'
        down={<ArrowForwardOutlined/>}
      />
      <Follow/>
      <div className={style.bottom}>
          <div className={style.title1}>
              <p>About</p>
              <p>Accessibility</p>
              <p>Help Center</p>
          </div>
          <div className={style.title2}>
              <p>Privacy & Terms 
              <ExpandMoreSharp className={style.logo}/></p>
              <p>Ad Choices</p>
          </div>
          <div className={style.title3}>
               <p>Advertising</p>
               <p>Business Services</p>
          </div>
          <div className={style.title4}>
               <p>Get the LinkedIn app</p>
               <p>More<ExpandMoreSharp className={style.logo}/></p>
          </div>
          <div className={style.title5}>
          <img  src="https://raw.githubusercontent.com/prakashvaithianathan/linkedIn-clone-react-firebase/c6d729bd598dc7e04162bc53b77c72ec41437a9c/src/images/login-logo.svg" alt="linkedin-font" />

        <p>LinkedIn Corporation © 2021</p>
          </div>
      </div>
    </div>
  );
};

export default Ads;