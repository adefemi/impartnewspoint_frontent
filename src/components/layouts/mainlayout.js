import React from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png"

const MainLayout = (props) => {
  return (
    <div className="blog-container">
      <div className="navbar">
        <div className="brand"><Link to="/"><img src={logo} alt=""/></Link></div>

        <div className="navRight">
          <div className="navLinks">
            <a href="http://www.facebook.com">Facebook</a>
          </div>

          <div className="navLinks">
            <a href="#">Twitter</a>
          </div>
          <div className="navLinks">
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="children-con">
        {props.children}
      </div>
      <footer>
        Impartnewspoint 2020 &copy; All Rights Reserved
      </footer>
    </div>
  );
};

export default MainLayout;
