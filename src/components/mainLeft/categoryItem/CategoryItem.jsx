import React from "react";
import Image from "next/image";
import SubCategoyItem from "../subCategoyItem/SubCategoyItem";

const CategoryItem = ({ item }) => {
  return (
    <div className="collapse mb-1 rounded-lg">
      <input type="radio" name="my-accordion-1" checked="checked" />
      <div className="collapse-title flex justify-between bg-[#e8f0f5] text-xl font-medium">
        <div className="flex items-center first:">
          <Image
            className="bg-[#f7f8fa] rounded-lg p-2"
            width={60}
            height={60}
            src={item?.image}
            alt=""
          />
          <div>
            <h1 className="text-sm">{item?.name}</h1>
            <h1 className="text-sm">9</h1>
          </div>
        </div>

        <div className="-mr-8">
          <h2 className="text-lg">15</h2>
          <h2 className="text-sm text-[#7E7E7E]">Duas</h2>
        </div>
      </div>
      <div className="collapse-content p-0 w-full">
        {item?.categories?.map((category, index) => {
          return <SubCategoyItem category={category} key={index} />;
        })}
      </div>
    </div>
  );
};

export default CategoryItem;
