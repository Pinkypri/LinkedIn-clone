import React, { useState } from 'react'
import {
    Home,
    Search,
    Work,
    Notifications,
    Textsms,
    Apps,
    People,
    ExpandMoreSharp
} from "@material-ui/icons";

import { Avatar} from "@material-ui/core"
import styles from "./Header.module.css"
import { useSelector } from "react-redux"

const Header = () => {
    const { user }= useSelector((state) => state.user);

    const [headerOption, setHeaderOption] = useState("home");

    return (
        <div className={styles.header}>
            <div className={styles.header_left}>
                <img
                    src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-icon-png.png"
                    />

                <div className={styles.header_input}>
                    <Search />
                    <input type="text" placeholder="Search for jobs,skills,companies.." />
                </div>
            </div>
            <div className={styles.header_center}>
                <div className={`${styles.header_option} ${headerOption === "home" ? styles.header_optionActive : null}`}
                    onClick={() => setHeaderOption("home")}>
                    <Home fontSize="large" />
                    <p>Home</p>
                </div>
                <div className={`${styles.header_option} ${headerOption === "people" ? styles.header_optionActive : null}`}
                    onClick={() => setHeaderOption("people")}>
                    <People fontSize="large" />
                    <p>My Network</p>
                </div>
                <div className={`${styles.header_option} ${headerOption === "work" ? styles.header_optionActive : null}`}
                    onClick={() => setHeaderOption("work")}>
                    <Work fontSize="large" />
                    <p>jobs</p>
                </div>
                <div className={`${styles.header_option} ${headerOption === "sms" ? styles.header_optionActive : null}`}
                    onClick={() => setHeaderOption('sms')}>
                    <Textsms fontSize="large" />
                    <p>Messaging</p>
                </div>
                <div className={`${styles.header_option} ${headerOption === "user" ? styles.header_optionActive : null}`}
                    onClick={() => setHeaderOption("user")}>
                    <Notifications fontSize="large" />
                    <p>Notifications</p>
                </div>
            </div>
            <div className={styles.header_right} >
                <Avatar src={user.photoURL} />
                <p>Me<ExpandMoreSharp className={styles.header_info} /></p>
            </div>
    
            <div className={styles.header_right} >
                <Apps fontSize="large" />
                <br/>
                <p>Work <ExpandMoreSharp className={styles.header_info}/></p>
            </div>
            <div className={styles.header_para}>
                <p>
                    Try Premium Free <br /> for 1 Month
                </p>
            </div>
        </div>

    )
}

export default Header
