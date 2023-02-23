import React from 'react';
import '../Css/FooterStyle.css';

const Footer = () => {
    return(
        <>
        <footer>
            <div className='main-footer'>
                <div className="container">
                    <div className="row">
                     {/*column*/}
                        <div className="col">
                            <h4>CONTACT DETAIL</h4>
                            <ul className="list-unstyled">
                                <li> Priyanka Modern Sr. Sec. Schoool</li>
                                <li>Naurangabad, Dhampur,</li>
                                <li>(Bijnor) U.P.</li>
                                <li>Junior Wing Ph.: 01344 - 220219</li>
                                <li>Senior Wing Ph.: 01344 - 220192</li>
                                <br/>
                                <li>Email ID :</li>
                                <li>pmsdhampur1986@gmail.com</li>
                            </ul>
                        </div>
                        {/*column*/}
                        <div className="col">
                            <h4>MEDICAL INSTITUTE</h4>
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
                        {/*column*/}
                        <div className="col">
                           <h4>BTC INSTITUTE</h4>
                           <ul className="list-unstyled">
                                <li>Priyanka College Of Professional</li>
                                <li>Education, Dhampur</li>
                                <li>Affiliated By - PNP, Prayagraj</li>
                                <li>College Code - 150008</li>
                                <li>Contact - 01344-222192</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </> 
    )
  }

export default Footer;