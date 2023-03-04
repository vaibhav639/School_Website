import React from "react";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <div className="contactContent">
      <br />
      <br />
      <div>
        <h2 style={{ color: "#df7020" }}>Contact Us</h2>
      </div>
      <br />
      <hr color="#ebebe0"></hr>
      <br />

      <div className="mycontainer">
        <div className="row">
          {/*column1*/}
          <li>
            <ul className="list1">
              <div className="col">
                <h4>Address:</h4>
                <ul className="list-styled">
                  <li>PRIYANKA MODERN SR. SEC. SCHOOL</li>
                  <li>Naurangabad, Dhampur,</li>
                  <li>(Bijnor) U.P.</li>
                </ul>
              </div>
            </ul>
            {/*column2*/}
            <ul className="l1">
              <div className="col">
                <h4>Phone No. :</h4>
                <ul className="list-unstyled">
                  <li>Junior Wing Ph.: 01344 - 220219</li>
                  <li>Senior Wing Ph.: 01344 - 220192</li>
                  <li>Fax: 01344-222076</li>
                  <li>E-mail ID : pmsdhampur1986@gmail.com</li>
                </ul>
              </div>
            </ul>
          </li>
        </div>
      </div>
      <br/>
      <br/>
      <div>
        <h3 style={{ color: "#8a8a5c" }}>Feel free to contact us:</h3>
      </div>
      <br/>
      <form>
        <input
          type="text"
          className="formItem2"
          placeholder="Your Name"
          name="Your Name"
        ></input>
        <br />
        <input
          type="text"
          className="formItem2"
          placeholder="Email Address"
          name="Email Address"
        ></input>
        <br />
        <input
          type="text"
          className="formItem2"
          placeholder="Mobile Number"
          name="Mobile Number"
        ></input>
        <br />
        <input
          type="text"
          className="formItem3"
          placeholder="Any message in max. 300 words"
          name="Any message in max. 300 words"
        ></input>
        <br/>
        <br></br>
        <button className="mySubmitButton">Submit Form</button>
      </form>
    </div>
  );
};

export default Contact;
