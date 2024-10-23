import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "./Animation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome&nbsp;</span>
        <span>To&nbsp;</span>
        <span>Bhagirath&nbsp;</span>
        <span>Technologies&nbsp;</span>
        {/* <span>-&nbsp;Beyond&nbsp;</span>
        <span>The&nbsp;</span>
        <span>Possible&nbsp;</span>
        <span>Limits</span> */}
      </div>
    </div>
  );
};

export default PreLoader;
