import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const TopMenu = () => {
  return (
    <AppBar>
    <Toolbar>
      <Typography>
        <Link to="/">Home</Link>
      </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;


/*
in the start of 35 lecture we remove this div and add app tag.

 // <div>
    //   <ul>
    //     <li style={{display: "inline", padding: "5px"}}>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li  style={{display: "inline", padding: "5px"}}>
    //     <Link to="/products">Products</Link>
    //     </li>
    //     <li  style={{display: "inline", padding: "5px"}}>
    //       <Link to="/contact-us">Contact Us</Link>
    //     </li>

    //     <li style={{ display: "inline", padding: "5px" }}>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // </div>

*/
