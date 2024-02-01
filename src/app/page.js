import MainContainer from "@/components/mainContainer/MainContainer";
import MainLeft from "@/components/mainLeft/MainLeft";
import MainRight from "@/components/mainRight/MainRight";
import Navber from "@/components/navber/Navber";
import SideBer from "@/components/sideBer/SideBer";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto bg-[#e9ecf0] p-4 flex gap-2 max-w-[1300px]">
      <div className="min-h-screen w-[100px]">
        <SideBer />
      </div>
      <div className="min-h-screen w-full">
        <div className="w-full">
          <Navber />
        </div>
        <div className="w-full gap-4 grid grid-cols-12 min-h-screen ">
          <div className="col-span-3">
            <MainLeft />
          </div>
          <div className="col-span-7">
            <MainContainer />
          </div>
          <div className="col-span-2">
            <MainRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
