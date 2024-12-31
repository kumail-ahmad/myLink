import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="Navbar border border-red-900 my-12 mx-7 rounded-full p-5 bg-white flex items-center justify-between">
      <div className="logo&clickables flex items-center gap-7">
        <div className="svg ">
          <Image
            alt="Palm"
            width={38}
            height={32}
            src="https://img.freepik.com/free-psd/silhouettes-palm-tree-illustration_23-2151074534.jpg?t=st=1735656768~exp=1735660368~hmac=a84f92a2e12d7935b333a73af55bdf7b2b64f906fe48a43de15642c47a30943f&w=740"
          ></Image>
        </div>
        <div className="clickables ">
          <ul className="clickables  flex flex-row gap-5">
            <li className="hover:bg-gray-600 p-2 rounded">Templates</li>
            <li className="hover:bg-gray-600 p-2 rounded">Templates</li>
            <li className="hover:bg-gray-600 p-2 rounded">Templates</li>
            <li className="hover:bg-gray-600 p-2 rounded">Templates</li>
            <li className="hover:bg-gray-600 p-2 rounded">Templates</li>
          </ul>
        </div>
      </div>
      <div className="buttons flex gap-5">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-5 rounded-full">
          Log-in
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full">
          Sign up Free
        </button>
      </div>
    </div>
  );
};

export default Navbar;
