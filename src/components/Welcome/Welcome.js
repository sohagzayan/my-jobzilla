import React from "react";
import logoIcon from "../../assets/image/digipplus-logo-70x70.38a25d5cef0d.png";

const Welcome = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        <img src={logoIcon} alt="" className="w-[80px] mb-2" />
        <h3 className="text-2xl font-bold">Welcome To Digipplus</h3>
      </div>
    </div>
  );
};

export default Welcome;
