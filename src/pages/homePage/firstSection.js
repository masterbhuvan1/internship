import React from "react";
import Image from "next/image";
import WordSlider from "./wordSlider";

function FirstSection() {
  return (
    <div className="flex py-36  w-full min-h-screen items-center justify-around  bg-blue-500">
      <div className="flex flex-col ">
        <div className=" text-7xl font-bold">power up your</div>
        {/* <div className=" text-7xl font-bold text-yellow-400">learning</div> */}
        <WordSlider />

        <div className=" text-7xl font-bold">journey with</div>
        <div className=" text-7xl font-bold">infinity learn</div>

        <div className="flex h-4/5 md:h-3/5 mt-9 mb-5">
          <input
            className="rounded-l-lg bg-blue-500 w-full sm:w-1/2 md:w-96 h-10 md:h-12 pl-4 md:pl-6 text-base md:text-lg border-2 text-black placeholder-white"
            type="text"
            placeholder="enter your mobile number ....."
            onChange={(e) => setQuery(e.target.value)}
          />

          <button className=" md:w-32 rounded-r-3xl  bg-yellow-500">
            join for free
          </button>
        </div>
        <div> we will send an otp for verification</div>
      </div>
      <div className=" mt-5">
        <Image src="./firstSection.svg" height={400} width={450} />
      </div>
    </div>
  );
}
export default FirstSection;
