import Image from "next/image";
import React from "react";
// import { IoSearchOutline } from "react-icons/io";

const Navber = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="p-4 text-2xl">Duas Page</h1>
      </div>
      <div className="flex items-center gap-16">
        <div>
          {/* <IoSearchOutline /> */}
          <input
            placeholder="Search by Dua Name"
            className="outline-none placeholder:text-[#868686] py-2.5 rounded-md w-[371px] px-5"
            type="text"
          />
        </div>
        <Image
          src="https://duaruqyah.com/assets/settings/profile.svg"
          width={50}
          height={50}
          alt="user"
        />
      </div>
    </div>
  );
};

export default Navber;
