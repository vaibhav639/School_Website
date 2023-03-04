import React from "react";
import "../Css/Gallery.css";
import pic1 from "../Images/pic-1.jpg";
import pic2 from "../Images/pic-2.jpg";
import pic3 from "../Images/pic-3.jpg";
import pic4 from "../Images/pic-4.jpg";
import pic5 from "../Images/pic-5.jpg";


const Gallery = () => {
  return (
    <div>
      <br />
      <div className="galleryContent">
        <div>
          <h1 style={{ color: "#df7020" }}>Photo Gallery - 2022-23</h1>
          <br />
          session:-{" "}
          <select name="s1">
            <option>2022-23</option>
            <option>2021-22</option>
            <option>2020-21</option>
            <option>2019-20</option>
          </select>{" "}
          <button className="showPics">show pics</button>
        </div>

        <br/>
        <br/>

        <div className="GalleryImages">
          <div className="image">
            <a href="pic-1.jpg">
              <img src={pic1} alt="image 1" width={320} height={180} />
            </a>
            <div className="mycontent">
              <b>Republic Day Celebration</b>
            </div>
          </div>
          <div className="image">
            <a href="pic-2.jpg">
              <img src={pic2} alt="image 2" width={320} height={180} />
            </a>
            <div className="mycontent">
              <b>Teacher Day celebration</b>
            </div>
          </div>
          <div className="image">
            <a href="pic-3.jpg">
              <img src={pic3} alt="image 3" width={320} height={180} />
            </a>
            <div className="mycontent">
              <b>Independence Day celebration</b>
            </div>
          </div>
          <div className="image">
            <a href="pic-4.jpg">
              <img src={pic4} alt="image 3" width={320} height={180} />
            </a>
            <div className="mycontent">
              <b>Republic Day Celebration</b>
            </div>
          </div>
          <div className="image">
            <a href="pic-5.jpg">
              <img src={pic5} alt="image 3" width={320} height={180} />
            </a>
            <div className="mycontent">
              <b>Sports Activities</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
