import React, { Component } from "react";
import Aux from "../Auxilliary/Auxiliary";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

import classes from "./Layout.module.css";

class Layout extends Component {
  state = { showSideDrawer: false };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  toggleSideDrawer = () => {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer,
    }));
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.toggleSideDrawer} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
