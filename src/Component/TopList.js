import React from 'react';
import logo from '../Images/logo.png';
import '../Css/TopListStyle.css';
import mobileAppTmage from '../Images/mobileApp.png'


const TopList = () => {
    return(
      <div>
      <div className="logocontainer">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      <div>
      <img src={mobileAppTmage} alt="mobilelogo" className="mobileLogo"></img>
      </div>
      </div>
    )
  }

export default TopList;