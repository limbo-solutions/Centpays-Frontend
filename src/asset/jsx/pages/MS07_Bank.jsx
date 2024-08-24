import React, { Component } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

class Bank extends Component {
  constructor(props) {
    super(props);
    this.state = {sidebaropen: true,};
  }

  render() {
    return (
      <>
        <Header />
        <Sidebar />
        <div
          className={`main-screen ${
            this.state.sidebaropen
              ? "collapsed-main-screen"
              : "expanded-main-screen"
          }  `}
        >
            <div>Banks</div>
        </div>
       
      </>
    );
  }
}

export default Bank;
