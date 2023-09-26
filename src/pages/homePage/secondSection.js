import React, { useState } from "react";
import Image from "next/image";
const std = [" 11 to 12 +", "9 to 10", " 4 to 8 ", " 1 to 3 "];
export const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  const activeTab = (tab, index) => {
    setLeft(index * 148);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };
  return (
    <div>
      <div
        className="rounded-2xl   bg-gray-200 text-black  "
        style={{ height: 34 }}
      >
        <div className="h-full mt-1 gap-12  flex items-center relative">
          {data.map((tab, index) => (
            <div
              key={index}
              className={` h-8 py-1 text-center cursor-pointer
              ${
                selectedTab == index ? " bg-yellow-300 " : ""
              } bg-white rounded-2xl  mt-2 justify-center items-center 
            `}
              onClick={() => activeTab(tab, index)}
              style={{ zIndex: selectedTab === index ? 1 : 0, width: 100 }}
            >
              {tab}
            </div>
          ))}
          <span
            className=" h-8  bg-yellow-300 text-black  absolute transition-all cubic-bezier[0.88, -0.35, 0.565, 1.35] duration-500 rounded-2xl mt-2"
            style={{ left, width: 100 }}
          >
            {/* // {data[left / 100]} */}
          </span>
        </div>
      </div>
    </div>
  );
};
const items = [
  {
    id: 0,
    subItems: [
      {
        id: 0,
        name: "class 11 to 12",
        subItemAbout: "competitive exam preparation",
        svg: "/barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam ",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "./iit.svg",
          },
          {
            lid: 1,
            name: "Neet Preparation",
            subItemAbout: "medical exam",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "./medical.svg",
          },
          {
            lid: 2,
            name: "CUET Preparation",
            subItemAbout: "common entrance test",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "./cuet.svg",
          },
        ],
      },
    ],
  },
];
function SecondSecCard(props) {
  return (
    <div className=" flex flex-col bg-blue-200 h-[361px] px-16 py-20  w-1/3 rounded-2xl">
      <Image src={props.data.svg} color="white" width={96.74} height={96.74} />
      <div className="text-black text-xl  mt-4 font-medium">
        {props.data.name}
      </div>
      <div className=" text-gray-700 text-sm mb-5">
        {props.data.subItemAbout}
      </div>
      <div className=" text-blue-400">{props.data.examTime}</div>
    </div>
  );
}
function SecondSection() {
  const [endpoint, setEndpoint] = useState("day");
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="items-center min-h-screen  bg-gray-200">
      <div className="w-[70%] max-w-[1000px] mx-auto">
        <div className="flex justify-evenly p-6 text-center font-bold text-4xl gap-4 relative bottom-[4.5rem] mx-auto flex-row items-center h-36 bg-yellow-300 px-4 rounded-2xl">
          <div className="text-black flex flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Learners
            </div>
            <div className="font-bold text-center">50k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black items-center flex text-center flex-col border-black">
            <div className="text-center font-normal text-2xl text-[#080E14]">
              Cities
            </div>
            <div className="font-bold text-center">60k+</div>
          </div>
          <div className="border-r-2 border-[#080E14] opacity-20 h-full" />
          <div className="text-black  items-center text-center flex flex-col">
            <div className="text-center font-normal text-2xl text-[#080E14] flex-grow">
              Classes Conducted
            </div>
            <div className="font-bold text-center">9200+</div>
          </div>
        </div>

        <h1 className=" text-black mx-auto tracking-wide text-center text-5xl font-black">
          select your learning goal{" "}
          <span className=" text-blue-500 "> grade</span>-wise
        </h1>
        <div className=" h-full flex justify-center my-9  items-center">
          {/* {std.map((item) => (
            <button className=" bg-white rounded-3xl px-4 py-2 mx-3 text-black hover:bg-yellow-300">
              {item}
            </button>
          ))} */}
          <SwitchTabs data={std} onTabChange={onTabChange} />
        </div>
        <div className=" flex flex-col pb-20 justify-start ">
          <div className=" text-4xl text-black mb-6 font-semibold ">
            competitive exam
          </div>
          <div className=" flex  w-full gap-5  ">
            {items[0].subItems[0].lists.map((item) => (
              <SecondSecCard data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
