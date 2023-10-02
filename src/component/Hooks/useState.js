import React, { useState } from "react";
import "./style.css";

const UseStateComponent = () => {
  const [mynum, setMynum] = useState(0);

  return (
    <div className="center_div">
      <p>{mynum}</p>
      <div className="button2" onClick={() => setMynum(mynum + 1)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        INCR
      </div>
      <div
        className="button2"
        onClick={() => (mynum > 0 ? setMynum(mynum - 1) : -1)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
      </div>
    </div>
  );
};

export default UseStateComponent;
