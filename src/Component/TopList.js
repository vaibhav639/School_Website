import React from "react";
import logo from "../Images/logo.png";
import "../Css/TopListStyle.css";
import mobileAppTmage from "../Images/mobileApp.png";

const TopList = () => {
  return (
    <div>
      <tr className="logotable">
        <td>
          <img src={logo} alt="logo" className="logo"></img>
        </td>
        <td className="secondtable">
          <p>01344 - 220192, 222192, 220069</p>
          <p>Affiliated to C.B.S.E. New Delhi</p>
        </td>
        <td>
          <img src={mobileAppTmage} alt="mobilelogo" className="mobileLogo"></img>
        </td>
      </tr>
    </div>
  );
};

export default TopList;
