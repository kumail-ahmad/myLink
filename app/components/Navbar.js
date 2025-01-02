"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { usePathname } from "next/navigation";
const Navbar = () => {
  // const pathname = usePathname();
  // const showNavbar = ["/", "/generate"].includes(pathname);
  return (
    <>
      <div className="container">
        <nav className="bg-white md:w-[80vw] w-[85vw] flex justify-between fixed left-7 md:left-36 top-4 md:top-10 right-[10vw] rounded-full  px-1 p-4 md:p-5 md:px-7 ">
          <div className="logo&clickables flex items-center md:gap-3">
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
              <ul className="clickables   flex flex-row gap-2">
                <Link href="/">
                  <li className="hover:bg-gray-300 p-2 rounded"> Home</li>
                </Link>
                <Link href="/myLink">
                  <li className="hover:bg-gray-300 p-2 rounded">
                    {" "}
                    My PalmLink
                  </li>
                </Link>

                <Link href="https://github.com/kumail-ahmad/Palm-Link">
                  <li className="hover:bg-gray-300 p-2 rounded">Github Repo</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="buttons hidden md:block  gap-5">
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-5 rounded-full ">
              Log In
            </button>
            <Link href="/generate">
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-5 rounded-full ml-5">
                Create  
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
