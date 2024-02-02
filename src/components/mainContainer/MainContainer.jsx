"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useRouter } from 'next/navigation'
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const MainContainer = () => {
  const [data, setData] = useState([]);
  const [sectionTitle, setSectionTitle] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res?.json())
      .then((result) => setData(result));
  }, []);

  return (
    <>
      <div className="p-4 mb-2 bg-white rounded-xl">
        <h1 className="font-medium">
          <span className="text-[#1fa45b]">Section: </span>The servant is
          dependent on his Lord
        </h1>
      </div>

      <div className="p-4 flex gap-6 flex-col min-h-screen">
        {data?.map((item, index) => {
          {
            return item?.categories?.map((item2) => {
              {
                return item2?.subCategories.map((item3) => {
                  return (
                    <div className="bg-white p-6 rounded-xl" key={item3?.id}>
                      <div className="flex items-center mb-3 gap-2">
                        <Image
                          width={30}
                          height={30}
                          src={"https://duaruqyah.com/assets/duacard.svg"}
                          alt="sectionLogo"
                        />
                        <h1 className="text-[#1fa45b] font-medium text-lg">
                          {item3?.subTitle}
                        </h1>
                      </div>

                      <p>{item3?.desc}</p>

                      <div className="mt-6">
                        <h1 className="text-2xl">{item3?.arabik}</h1>
                        <h1 className="text-xl mt-4">
                          {" "}
                          <span className="font-medium">Translation: </span>{" "}
                          {item3?.Translation}
                        </h1>
                      </div>

                      <div className="mt-4">
                        <h1 className="text-[#1fa45b] font-semibold text-lg mb-2">
                          Reference:
                        </h1>
                        <h1>{item3?.Reference}</h1>
                      </div>
                    </div>
                  );
                });
              }
            });
          }
        })}
      </div>
    </>
  );
};

export default MainContainer;
