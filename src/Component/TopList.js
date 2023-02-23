import React from 'react';
import logo from '../Images/logo.png';
import '../Css/TopListStyle.css';


const TopList = () => {
    return(
      
      <div className="logocontainer">
        <img src={logo} alt="logo" className="logo"></img>
      </div>
      
    
    )
  }

export default TopList;