import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto mt-1" style={{ width: "80%" }}>
      {children}
    </div>
  );
};

export default Layout;
