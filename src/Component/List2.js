import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/ListStyle.css';

const List2=()=>{
    return(
      <div>
        <header>
          <div classname = "container ">
            <nav>
              <div classname = "list2">
                <NavLink to= "/" className="listItem" activeClassname="activeItem">Home</NavLink>
                <NavLink to= "/about" className="listItem" activeClassname="activeItem">About</NavLink>
                <NavLink to= "/facilities" className="listItem" activeClassname="activeItem">Facilities</NavLink>
                <NavLink to= "/admissions" className="listItem" activeClassname="activeItem">Admissions</NavLink>
                <NavLink to= "/gallery" className="listItem" activeClassname="activeItem">Gallery</NavLink>
                <NavLink to= "/other" className="listItem" activeClassname="activeItem">Other</NavLink>
                <NavLink to= "/career" className="listItem" activeClassname="activeItem">Career</NavLink>
                <NavLink to= "/contact" className="listItem" activeClassname="activeItem">Contact</NavLink>
                <NavLink to= "/alumniregistration" className="listItem" activeClassname="activeItem">AlumniRegistration</NavLink>
              </div>
            </nav>
          </div>
        </header>
      </div>
    )
  }

export default List2;