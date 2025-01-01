import React from "react";
import Image from "next/image";
const Generate = () => {
  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture  ml-44">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>
      <div className="inputs flex flex-col justify-center items-center gap-2">
        <p className="font-poppins font-semibold text-2xl">Create your link</p>
        <input className="border border-purple-400 rounded-full p-3" type="text" placeholder="Enter Link text" />
        <input className="border border-purple-400 rounded-full p-3" type="text" placeholder="Enter Link " />
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Generate;
