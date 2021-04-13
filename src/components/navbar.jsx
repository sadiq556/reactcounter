import logo from "../bootstrap.svg";
import React, { Component } from "react";

const Navbar = ({totalcounter}) => {
  console.log('Navbar - Rendered');
    return (
// <!-- As a link -->
<div>
<nav className="navbar navbar-dark bg-primary m-2">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        width="30"
        height="24"
        className="d-inline-block align-text-top"
      />
      NavBar <span className="badge badge-pill badge-secondary">{totalcounter }</span>
    </a>
  </div>
</nav>
</div>
      );
}
 
export default Navbar;
// class Navbar extends 
// Component {
//   render() {
//     return (
//     //   // <!-- As a link -->
//     //   <div>
//     //     <nav className="navbar navbar-dark bg-primary m-2">
//     //       <div className="container-fluid">
//     //         <a class="navbar-brand" href="#">
//     //           <img
//     //             src={logo}
//     //             className="App-logo"
//     //             alt="logo"
//     //             width="30"
//     //             height="24"
//     //             className="d-inline-block align-text-top"
//     //           />
//     //           NavBar <span className="badge badge-pill badge-secondary">{this.props.totalcounter }</span>
//     //         </a>
//     //       </div>
//     //     </nav>
//     //   </div>
//     );
//   }
// }
