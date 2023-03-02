import React, { useState } from "react";

import "../Css/AlumniReg.css";
import logo2 from "../Images/logo2.png";
import ReCAPTCHA from "react-google-recaptcha";

import { NavLink } from "react-router-dom";

const AlumniRegistration = () => {
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

      <div className="myheader3">
        <h1>New Alumni Registration</h1>
      </div>

      <br />
      <br />
      <br />

      <form>
        <div className="myformcontainer">
          <label className="label1">ALUMNI'S NAME*</label>
          <input
            type="text"
            className="myitem1"
            placeholder="First Name"
            name="name"
          ></input>
          <input
            type="text"
            className="myitem1"
            placeholder="Middle Name"
            name="name"
          ></input>
          <input
            type="text"
            className="myitem1"
            placeholder="Last Name"
            name="name"
          ></input>

          <br />
          <br />

          <label className="label1">ADMISSION NO.</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Admission No."
            name="Admission no."
          ></input>

          <label className="label1">DATE OF BIRTH *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Select Date"
            name="Select Date"
          ></input>

          <br />
          <br />

          <label className="label1">YEAR OF JOINING</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Select session"
            name="Select session"
          ></input>

          <label className="label1">YEAR OF PASSING *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Select session"
            name="Select session"
          ></input>

          <br />
          <br />

          <label className="label1">LAST CLASS ATTENDED *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="select class"
            name="select class"
          ></input>

          <label className="label1">GENDER</label>
          <input
            type="text"
            className="myitem1"
            placeholder="select Gender"
            name="select Gender"
          ></input>

          <br />
          <br />

          <label className="label1">MOBILE NO. *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Contact No."
            name="Contact No."
          ></input>

          <label className="label1">EMAIL *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="abc@something.com"
            name="abc@something.com"
          ></input>

          <br />
          <br />
          <br />

          <label className="label1">PASSWORD *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Password"
            name="Password"
          ></input>

          <label className="label1">CONFIRM PASSWORD *</label>
          <input
            type="text"
            className="myitem1"
            placeholder="Password"
            name="Password"
          ></input>

          <br />
          <br />

          <label className="label1">UPLOAD PHOTOGRAPH</label>
          <button type="choose file" className="myitem2">
            choose file
          </button>

          <input
            type="text"
            className="myitem2"
            placeholder="No File chosen"
            name="No File Chosen"
          ></input>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        
        
       <div className="mybutton">
       <button>continue</button> 
       </div>
      
      
        
        
      </form>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    </div>
  );
};

export default AlumniRegistration;
