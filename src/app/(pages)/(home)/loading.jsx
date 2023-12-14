import React from "react";
import  './loading.css';
const Loading = () => {
  return (
    <div
      style={{ marginBlock: "9rem", display: "flex", justifyContent: "center" }}
    >
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
};

export default Loading;
