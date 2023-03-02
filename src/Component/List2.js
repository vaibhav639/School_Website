import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/List2Style.css';

const List2=()=>{
    return(
      <div>
        <header>
          <div classname = "container">
            <nav>
              <div classname = "list2">
                <NavLink to= "/" className="listItem" activeClassname="activeItem">HOME</NavLink>
                <NavLink to= "/about" className="listItem" activeClassname="activeItem">ABOUT</NavLink>
                <NavLink to= "/facilities" className="listItem" activeClassname="activeItem">FACILITIES</NavLink>
                <NavLink to= "/admissions" className="listItem" activeClassname="activeItem">ADMISSIONS</NavLink>
                <NavLink to= "/gallery" className="listItem" activeClassname="activeItem">GALLERY</NavLink>
                <NavLink to= "/other" className="listItem" activeClassname="activeItem">OTHER</NavLink>
                <NavLink to= "/career" className="listItem" activeClassname="activeItem">CAREER</NavLink>
                <NavLink to= "/contact" className="listItem" activeClassname="activeItem">CONTACT</NavLink>
                <NavLink to= "/alumniregistration" className="listItem" activeClassname="activeItem">ALUMNI REGISTRATION</NavLink>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }

export default List2;