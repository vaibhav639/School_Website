import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import About from "./Component/About";
import Facilities from "./Component/Facilities";
import Admissions from "./Component/Admissions";
import Gallery from "./Component/Gallery";
import Other from "./Component/Other";
import Career from "./Component/Career";
import Contact from "./Component/Contact";
import AlumniRegistration from "./Component/AlumniRegistration";
import Error from "./Component/Error";
import List2 from "./Component/List2";
import TopList from "./Component/TopList";
import Footer from "./Component/Footer";
import NewAlumni from "./Component/NewAlumni";
import Login from "./Component/Login";



const App = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <>
          <TopList />
          <div />
          <List2 />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/facilities" element={<Facilities />}></Route>
            <Route path="/admissions" element={<Admissions />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/other" element={<Other />}></Route>
            <Route path="/career" element={<Career />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/alumniregistration" element={<AlumniRegistration/>}></Route>
            <Route element={<Error />}></Route>
          </Routes>
          <Routes>
           <Route exact path="/" element={<NewAlumni />}></Route>
           <Route path="/Login" element={<Login />}></Route>
          </Routes>
          <Footer />
        </>
      </div>
    </div>
  );
};
export default App;
