import React from "react";
import "../Css/FooterStyle.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className="container">
            <div className="row">
              {/*column1*/}

              <li className="footerlist">
                <ul className="l1">
                  <div className="col">
                    <h3>CONTACT DETAIL</h3>
                    <br/>
                    <ul className="list-unstyled">
                      <li> Priyanka Modern Sr. Sec. Schoool</li>
                      <li>Naurangabad, Dhampur,</li>
                      <li>(Bijnor) U.P.</li>
                      <li>Junior Wing Ph.: 01344 - 220219</li>
                      <li>Senior Wing Ph.: 01344 - 220192</li>
                      <br />
                      <li>Email ID :</li>
                      <li>pmsdhampur1986@gmail.com</li>
                    </ul>
                  </div>
                </ul>
                {/*column2*/}
                <ul className="l1">
                  <div className="col">
                    <h3>MEDICAL INSTITUTE</h3>
                    <br/>
                    <ul className="list-unstyled">
                      <li>Priyanka College Of Medical Science And</li>
                      <li>Research Centre, Dhampur</li>
                      <li>Affiliated By - UP State Medical Faculty,</li>
                      <li>Lucknow & Indian Nursing Council, New</li>
                      <li>Delhi</li>
                      <li>Center Code - 1032</li>
                      <li>Contact - 01344-222974</li>
                    </ul>
                  </div>
                </ul>
                {/*column3*/}
                <ul className="l1">
                  <div className="col">
                    <h3>BTC INSTITUTE</h3>
                    <br/>
                    <ul className=" list-unstyled">
                      <li>Priyanka College Of Professional</li>
                      <li>Education, Dhampur</li>
                      <li>Affiliated By - PNP, Prayagraj</li>
                      <li>College Code - 150008</li>
                      <li>Contact - 01344-222192</li>
                    </ul>
                  </div>
                </ul>
              </li>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
