import React from "react";
import "../Css/Career.css";

const Career = () => {
  return (
    <div>
      <br />
      <div className="careerContent">
        <div>
          <h1 style={{ color: "#df7020" }}>Career</h1>
        </div>
        <br />
        <hr color="#ebebe0"></hr>
        <br />
        <br />
        <h3>Explore the opportunities & grow with us.</h3>
        <br />
        <br />
        <form>
          <input
            type="text"
            className="formItem"
            placeholder="Your Full Name"
            name="Your Full Name"
          ></input>
          <br />
          <input
            type="text"
            className="formItem"
            placeholder="Email Address"
            name="Email Address"
          ></input>
          <br />
          <input
            type="text"
            className="formItem"
            placeholder="Mobile Number"
            name="Mobile Number"
          ></input>
          <br />
          <input
            type="text"
            className="formItem"
            placeholder="Current Prefession"
            name="Current Prefession"
          ></input>
          <br />
          <input
            type="text"
            className="formItem"
            placeholder="Job Location"
            name="Job Location"
          ></input>
          <br />
          <input
            type="text"
            className="formItem"
            placeholder="Apply for Post"
            name="Apply for Post"
          ></input>
        </form>

        <div className="mydiv">
          <p className="myP1">Upload your resume</p>
          <button className="chooseButton">choose file</button>
          <p className="myp2">No file choosen</p>
          <br />

          <form>
            <input
              type="text"
              className="formItem1"
              placeholder="Any message in max. 300 words"
              name="Any message in max. 300 words"
            ></input>
            <br />
            <br/>
            <button className="submitButton">Submit Form</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
