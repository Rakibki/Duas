"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CategoryItem from "./categoryItem/CategoryItem";

const MainLeft = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res?.json())
      .then((result) => setData(result));
  }, []);


  return (
    <div className="bg-white rounded-t-2xl min-h-screen">
      <div className="bg-[#1fa45b] rounded-t-2xl  p-4">
        <h1 className="text-center text-white">Categories</h1>
      </div>

      <div className="flex justify-center">
        <input
          placeholder="Search by Dua Name"
          className="outline-none mt-2 border-[1px] border-[#e5e7eb] placeholder:text-[#868686] py-2.5 rounded-md"
          type="text"
        />
      </div>

      {/* category */}

      <div className="p-2">
        {data?.map((item, index) => {
          return (
            <CategoryItem className="cursor-pointer" key={index} item={item} />
          );
        })}
      </div>
    </div>
  );
};

export default MainLeft;
