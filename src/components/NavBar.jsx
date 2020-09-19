import React from "react";
import { A } from "hookrouter";

const Navbar = () => {
  return (
    <div>
      <h1>My Website</h1>
      <div className={"navbar"}>
        <A href={"/"}>Home</A>
        <A href={"/about"}>About</A>
        <A href={"/contact/123"}>Contact</A>
      </div>
    </div>
  );
};

export default Navbar;
