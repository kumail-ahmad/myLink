"use client";
import { useState } from "react";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Generate = () => {
  const [handleName, setHandleName] = useState("");
  const [linkText, setLinkText] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState([]);

  const handleAddLink = () => {
    if (linkText && linkURL) {
      setLinks([...links, { text: linkText, url: linkURL }]);
      setLinkText("");
      setLinkURL("");
      toast.success("Link added successfully!");
    } else {
      toast.error("Please provide both link text and URL.");
    }
  };

  const handleSubmit = () => {
    if (handleName && links.length > 0 && imageURL && description) {
      toast.success("Data submitted successfully!");
      // Here, you can handle the final submission logic (e.g., API call)
    } else {
      toast.error("Please complete all steps before submitting.");
    }
  };

  return (
    <div className="bg-[#eac1ea] min-h-screen grid grid-cols-2">
      <div className="div.picture mt-8 ml-44 md:block hidden">
        <Image alt="image" src="/generate.png" width={320} height={320} />
      </div>

      <div className="inputs flex flex-col justify-center gap-4 mt-16 md:mt-28">
        <p className="font-poppins font-semibold text-2xl w-60 ml-3">Create your link</p>

        <h1 className="font-semibold w-60 ml-3">Step 1: Name your Handle</h1>
        <input
          className="border border-purple-400 rounded-full p-2 w-[77vw] md:w-1/3 ml-4"
          type="text"
          placeholder="Enter your handle"
          value={handleName}
          onChange={(e) => setHandleName(e.target.value)}
        />

        <h1 className="font-semibold ml-3">Step 2: Add your Links</h1>
        <div className="addlinks ml-4">
          <input
            className="border border-purple-400 rounded-full p-2 md:w-1/3 mr-2"
            type="text"
            placeholder="Enter Link text"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
          <input
            className="border border-purple-400 rounded-full p-2 md:w-1/3"
            type="text"
            placeholder="Enter Link URL"
            value={linkURL}
            onChange={(e) => setLinkURL(e.target.value)}
          />
        </div>

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white md:w-1/3 font-bold py-2 px-4 rounded-full ml-4"
          onClick={handleAddLink}
        >
          +Add Link
        </button>

        <h1 className="font-semibold w-60 ml-3">
          Step 3: Add Your Display Picture and Description
        </h1>
        <div className="img&desc">
          <input
            className="border border-purple-400 rounded-full p-2 ml-4 md:w-1/3"
            type="text"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
          <input
            className="border border-purple-400 rounded-full p-2 ml-4 md:w-1/3"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button
          disabled={!handleName || links.length === 0 || !imageURL || !description}
          className={`${
            !handleName || links.length === 0 || !imageURL || !description
              ? "bg-purple-400"
              : "bg-purple-500 hover:bg-purple-600"
          } text-white font-bold py-3 px-5 rounded-full ml-4 md:w-1/3`}
          onClick={handleSubmit}
        >
          Submit
        </button>

        <ToastContainer />
      </div>
    </div>
  );
};

export default Generate;
