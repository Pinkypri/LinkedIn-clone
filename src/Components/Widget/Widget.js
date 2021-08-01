
import React from "react";
import style from "./Widget.module.css";

const Widget = ({
    
  title,
  img,
  topic1,
  date1,
  topic2,
  date2,
  topic3,
  date3,
  topic4,
  date4,
  more,
down
 
}) => {
  return <div className={style.widget}>
      <div className={style.title}>
      <h5>{title}</h5>
      {img}
      </div>
      <ul className={style.topic}>
          <div>
          <li>{topic1}</li>
          <p className={style.date}>{date1}</p>
          </div>
          <div>
          <li>{topic2}</li>
          <p className={style.date}>{date2}</p>
          </div>
          <div>
          <li>{topic3}</li>
          <p className={style.date}>{date3}</p>
          </div>
          <div>
          <li>{topic4}</li>
          <p className={style.date}>{date4}</p>
          </div>
      </ul>
      <div className={style.more}>
          <p>{more}</p>
          {down}
      </div>
     
  </div>;
};

export default Widget;