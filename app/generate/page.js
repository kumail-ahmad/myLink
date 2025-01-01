import React from "react";
import Image from "next/image";
const Generate = () => {
  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture  mt-10 ml-44">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>
      <div className="inputs flex flex-col  justify-center gap-2">
        <p className="font-poppins font-semibold text-2xl">Create your link</p>
        <h1 className="font-semibold"> Step 1: Name your Handle</h1>
        <input
          className="border border-purple-400 rounded-full p-2 w-1/3 ml-4"
          type="text"
          placeholder="Enter Link text"
        />
        <h1 className="font-semibold"> Step 2: Add your Links</h1>
        <div className="addlinks ml-4">
          <input
            className="border border-purple-400 rounded-full p-2 w-1/3 mr-2"
            type="text"
            placeholder="Enter Link text"
          />
          <input
            className="border border-purple-400 rounded-full p-2 w-1/3"
            type="text"
            placeholder="Enter Link Url"
          />
          <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full ml-4"
          type="submit"
        >
          Submit
        </button>
        </div>
        <h1 className="font-semibold">
          {" "}
          Step 3: Add Your Display Picture and Submit
        </h1>
        <input
          type="text"
          alt=""
          className="border border-purple-400 rounded-full p-2 w-[100vh] ml-4"
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full ml-4"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Generate;
