import React from "react";
import Header from "../components/Header";


const Layouts = ({ children }) => {
  return (
    <div >
      <Header />
      <div className="pages">{children}</div>
    </div>
  );
};

export default Layouts;
