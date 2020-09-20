import React from "react";
import Page from "../components/Page";

const Contact = ({ uid }) => {
  return (
    <div>
      <Page title={"Contact"}>
        <p>Contact page</p>
        <p>Hello, {uid}</p>
      </Page>
    </div>
  );
};

export default Contact;
