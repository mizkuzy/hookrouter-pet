import React from "react";

const Page = ({ title, children }) => {
  return (
    <div className={"pageContent"}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Page;
