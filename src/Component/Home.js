import React from "react";
import slideImage from "../Images/slideImage.png";
import "../Css/Home.css";
import ind1 from "../Images/ind1.jpeg";
import ind2 from "../Images/ind2.jpeg";
import ind3 from "../Images/ind3.jpeg";

const Home = () => {
  return (
    <>
      <div>
        <img src={slideImage} alt="slideImage" className="SlideImage"></img>
      </div>
      <br/>
      <br/>
      <div className="mainSection">
        <div className="contentBox">
          <div className="para1">
            <h3 style={{ color: "#df7020" }}>
              Welcome To Priyanka Modern School
            </h3>
            <div className="ig5">
              <h4 style={{ color: "#df7020" }}>NOTICES & CIRCULARS</h4>
            </div>
            <br/>
            <br/>           
            <div className="rightcontent1">
              <p>Paragraph 1</p>
              <hr/>
              <p>Paragraph 2</p>
              <hr />
              <p>Paragraph 3</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
              <p>Paragraph 4</p>
              <hr/>
            </div>
            <p className="paraStyle">
              Priyanka Modern School is an English medium affiliated to C.B.S.E
              New Delhi. Our institution is founded in 1986.
            </p>
            <br/>
            <br/>
            <h4 style={{ color: "#df7020" }}>MISSION STATEMENT</h4>
            <br />
            <p className="paraStyle">
              "To mould the students into emotionally, mentally, physically and
              socially responsible citizens of the country."
            </p>
            <br/>
            <br/>
            <h4 style={{ color: "#df7020" }}>RECENT ACTIVITIES</h4>
            <br/>
            <div className="imageGallery">
              <div className="ig1">
                <a href="ind1.jpeg">
                  <img src={ind1} alt="image 1" width={180} height={150} />
                </a>
                <div className="content">
                  <b>INDEPENDENCE DAY</b>
                </div>
              </div>
              <div className="ig1">
                <a href="ind2.jpeg">
                  <img src={ind2} alt="image 2" width={180} height={150} />
                </a>
                <div className="content">
                  <b>SPORTS</b>
                </div>
              </div>
              <div className="ig1">
                <a href="ind3.jpeg">
                  <img src={ind3} alt="image 3" width={180} height={150} />
                </a>
                <div className="content">
                  <b>REPUBLIC DAY</b>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <div className="para2">
            <div className="ig2">
              <h3 style={{ color: "#df7020" }}>OUR VISION</h3>
              <br/>
              <p className="pStyle">
                To emerge as globally recognized leading educational group by
                setting the standards of innovation and excellence in
              </p>
              <p className="pStyle">research, teaching and training.</p>
            </div>
            <div className="ig3">
              <h3 style={{ color: "#df7020" }}>IMPORTANT LINKS</h3>
              <br/>
              <div className="content1">LINK-1</div>
              <br/>
              <div className="content1">LINK-2</div>
              <br/>
              <div className="content1">LINK-3</div>
              <br/>
              <div className="content1">LINK-4</div>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="ig6"><h3>FOLLOW US ON FACEBOOK</h3></div>
            <div className="ig7"><h3>FOLLOW US ON INSTAGRAM</h3></div>
            <div className="ig8"><h3>FOLLOW US ON YOUTUBE</h3></div>
          </div>
      </div>
    </>
  );
};

export default Home;
