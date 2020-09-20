import React from "react";
import { A } from "hookrouter";

const AboutMe = () => {
  return (
    <div>
      <p>AboutMe Component</p>
      <p>
        <A href={"/contact/Lucy"}>Contact Lucy</A>
      </p>
    </div>
  );
};

export default AboutMe;
