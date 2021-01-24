import React from "react";
import classes from "./DrawerToggler.module.css";

const DrawerToggler = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.toggler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggler;
