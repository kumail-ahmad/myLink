import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7 ">
        <div className="logo&clickables flex items-center gap-3">
          <div className="svg mx-2 flex items-center ">
            <Link href="/">
              {" "}
              <h3 className="font-bold text-2xl">Palmlink</h3>
            </Link>
            <Link href="/">
              {" "}
              <Image
                alt="Palm"
                width={38}
                height={32}
                src="https://img.freepik.com/free-psd/silhouettes-palm-tree-illustration_23-2151074534.jpg?t=st=1735656768~exp=1735660368~hmac=a84f92a2e12d7935b333a73af55bdf7b2b64f906fe48a43de15642c47a30943f&w=740"
              ></Image>
            </Link>
          </div>
          <div className="clickables ">
            <ul className="clickables  flex flex-row gap-2">
              <Link href="/">
                <li className="hover:bg-gray-300 p-2 rounded"> Home</li>
              </Link>
              <Link href="/generate">
                <li className="hover:bg-gray-300 p-2 rounded"> Create</li>
              </Link>

              <Link href="withphoto"><li className="hover:bg-gray-300 p-2 rounded">slug</li></Link>
              <li className="hover:bg-gray-300 p-2 rounded">Templates</li>
              <li className="hover:bg-gray-300 p-2 rounded">Templates</li>
            </ul>
          </div>
        </div>
        <div className="buttons flex gap-5">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-5 rounded-full">
            Log In
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full">
            Sign up Free
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
