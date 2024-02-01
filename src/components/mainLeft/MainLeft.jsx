"use client";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

const MainLeft = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res?.json())
      .then((result) => setData(result));
  }, []);

  console.log(data);

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
      <div className="mt-6">
        <Accordion>
          {data?.map((item) => {
            return (
              <AccordionItem key={item?.name}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What harsh truths do you prefer to ignore?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat ut occaecat consequat est minim minim
                    esse tempor laborum consequat esse adipisicing eu
                    reprehenderit enim.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
};

export default MainLeft;
