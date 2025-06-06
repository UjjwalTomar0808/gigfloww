import React from "react";
import Assets from "../../assets/export";

const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-[40%] h-48 sm:h-60 lg:h-full relative overflow-hidden">
        <img
          src={Assets.oldAuth}
          alt="Left Side"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      <div className="w-full lg:w-[60%] relative flex flex-col p-4 sm:p-6 lg:p-10 items-center overflow-hidden flex-1">
        <div className="absolute -top-40 -right-40 hidden lg:block">
          <div className="w-80 h-80 border-2 border-[#2784B8] rounded-full flex items-center justify-center">
            <div className="w-40 h-40 border-2 border-[#2784B8] rounded-full"></div>
          </div>
        </div>

        {children}
      </div>
    </main>
  );
};

export default AuthLayout;