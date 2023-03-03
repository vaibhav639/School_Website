import React from "react";
import { NavLink } from "react-router-dom";
import "../Css/AlumniReg.css";
import logo2 from "../Images/logo2.png";

const Login = () => {
  return (
    <div>
      <div className="topheader">
        <tr className="tr1">
          <td className="td1"> Call Us : 01344-220069</td>
          <td className="td2">Email Us : pmsdhampur1986@gmail.com</td>
        </tr>
      </div>

      <header2 className="myheader2">
        <div className="mycontainer mycontainer-flex">
          <div>
            <img src={logo2} alt="logo2" className="logo2"></img>
          </div>
          <nav>
            <div>
              <NavLink
                to="/NewAlumni"
                className="Item1"
                activeClassname="myactiveItem"
              >
                NEW ALUMNI
              </NavLink>
              <NavLink
                to="/Login"
                className="Item2"
                activeClassname="myactiveItem"
              >
                LOGIN
              </NavLink>
            </div>
          </nav>
        </div>
      </header2>

      <div className="myheader4">
        <h3>Registration Login</h3>
      </div>

      <br />
      <br />
      <br />

      <div className="loginArea">
        <h2>Login Area</h2>
      </div>

      <br/>
      <br/>
      

      <form>
        <div className="myformcontainer1">
          
          <input
            type="text"
            className="myformItem"
            placeholder="Email ID"
            name="Email ID"
          ></input>

          <br/>
          <br/>

          <input
            type="text"
            className="myformItem"
            placeholder="********"
            name="*********"
          ></input>

          <br/>
          <br/>

          <button className="loginButton">LOGIN</button>
          <button className="forgotButton">FORGET</button>

          <br/>
          <br/>
          <br/>

          <div className="RegNewAlumni">
            <h4>Register New Alumni</h4>
          </div>


        </div>
      </form>
    </div>
  );
};

export default Login;
