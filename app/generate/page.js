"use client";
import { React, useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
  const [link, setlink] = useState("");
  const [linktext, setlinktext] = useState("");
  const [handle, sethandle] = useState("");
  const addLink = async (text, link, handle) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      Link: link,
      Linktext: text,
      handle: handle,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("localhost:3000/api/add", requestOptions);
    const result = await r.json();
    toast(result.message);
  };
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
          onclick={(e) => {
            sethandle(e.target.value);
          }}
          value={handle || ""}
        />
        <h1 className="font-semibold"> Step 2: Add your Links</h1>
        <div className="addlinks ml-4">
          <input
            className="border border-purple-400 rounded-full p-2 w-1/3 mr-2"
            type="text"
            placeholder="Enter Link text"
            onclick={(e) => {
              setlink(e.target.value);
            }}
            value={handle || ""}
          />
          <input
            className="border border-purple-400 rounded-full p-2 w-1/3"
            type="text"
            placeholder="Enter Link Url"
            onclick={(e) => {
              setlinktext(e.target.value);
            }}
            value={handle || ""}
          />
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full ml-4"
            type="submit"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
        <h1 className="font-semibold">
          {" "}
          Step 3: Add Your Display Picture and Submit
        </h1>
        <input
          type="text"
          alt=""
          className="border border-purple-400 rounded-full p-2  ml-4 w-1/3"
          onclick={(e) => {
            sethandle(e.target.value);
          }}
          value={handle || ""}
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full ml-4 w-1/3"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Generate;
