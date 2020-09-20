import React from "react";
import Page from "../components/Page";
import { A, useRoutes } from "hookrouter";
import AboutMe from "./AboutMe";
import AboutMyCat from "./AboutMyCat";
import AboutMyDog from "./AboutMyDog";

const routes = {
  "/me": () => <AboutMe />,
  "/cat": () => <AboutMyCat />,
  "/dog": () => <AboutMyDog />,
};

const About = () => {
  let match = useRoutes(routes);

  return (
    <div>
      <Page title={"About"}>
        <div className={"linksContainer"}>
          <span className={"myLink"}>
            <A href={"/about/me"}>About Me</A>
          </span>{" "}
          <span className={"myLink"}>
            <A href={"/about/cat"}>About My Cat</A>
          </span>{" "}
          <span className={"myLink"}>
            <A href={"/about/dog"}>About My Dog</A>
          </span>
        </div>
        {match || "Pick up the page"}
      </Page>
    </div>
  );
};

export default About;
