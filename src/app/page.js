import Navber from "@/components/navber/Navber";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto bg-[#e9ecf0] p-4 flex gap-2 border-2 max-w-[1250px]">
      <div className="border-2 min-h-screen w-[80px]">Left side Bar</div>
      <div className="border-2 min-h-screen w-full">
        <div className="w-full">
          <Navber />
        </div>
        <div className="w-full grid grid-cols-12 min-h-screen border-2">
          <div className="border-2 col-span-3">Left Side bar</div>
          <div className="border-2 col-span-7">main</div>
          <div className="border-2 col-span-2">Right Side bar</div>
        </div>
      </div>
    </div>
  );
};

export default page;
