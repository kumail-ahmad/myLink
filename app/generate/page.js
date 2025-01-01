"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

const Generate = () => {
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [handle, setHandle] = useState("");
  const [pic, setPic] = useState("");

  const handleChange = (index, field, value) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i === index) {
          return { ...item, [field]: value };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks([...links, { link: "", linktext: "" }]);
  };

  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links,
      handle,
      pic,
    });

    console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch(
      "http://localhost:3000/api/add",
      requestOptions
    );
    const result = await response.json();
    if (result.success) {
      toast.success(result.message);
      setLinks([{ link: "", linktext: "" }]);
      setPic("");
      setHandle("");
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture mt-10 ml-44">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>

      <div className="inputs flex flex-col justify-center gap-4">
        <p className="font-poppins font-semibold text-2xl">Create your link</p>

        <h1 className="font-semibold">Step 1: Name your Handle</h1>
        <input
          className="border border-purple-400 rounded-full p-2 w-1/3 ml-4"
          type="text"
          placeholder="Enter your handle"
          onChange={(e) => setHandle(e.target.value)}
          value={handle}
        />

        <h1 className="font-semibold">Step 2: Add your Links</h1>
        {links.map((item, index) => (
          <div key={index} className="addlinks  ml-4">
            <input
              className="border border-purple-400 rounded-full p-2 w-1/3"
              type="text"
              placeholder="Enter Link URL"
              onChange={(e) => handleChange(index, "link", e.target.value)}
              value={item.link || ""}
            />
            <input
              className="border border-purple-400 rounded-full p-2 w-1/3 mr-2"
              type="text"
              placeholder="Enter Link text"
              onChange={(e) => handleChange(index, "linktext", e.target.value)}
              value={item.linktext}
            />
          </div>
        ))}

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white w-1/3 font-bold py-2 px-4 rounded-full ml-4"
          onClick={addLink}
        >
          +Add Link
        </button>

        <h1 className="font-semibold">
          Step 3: Add Your Display Picture and Submit
        </h1>
        <input
          className="border border-purple-400 rounded-full p-2 ml-4 w-1/3"
          type="text"
          placeholder="Enter image URL"
          onChange={(e) => setPic(e.target.value)}
          value={pic}
        />

        <button
          disabled={pic === "" || handle === ""}
          className="disabled:bg-purple-400 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full ml-4 w-1/3"
          onClick={submitLinks}
        >
          Submit
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
