"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, setText] = useState("");
  const router = useRouter();

  
  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-2">
        <div className="text&all mx-16">
          <div className="flex justify-center mt-40 flex-col ml-[5vw] gap-3 font-poppins">
            <p className="text-yellow-300 font-bold text-6xl">
              Everything you{" "}
            </p>
            <p className="text-yellow-300 font-bold text-5xl">
              are. In one simple,
            </p>
            <p className="text-yellow-300 font-bold text-5xl"> link in bio.</p>
            <p className="text-yellow-200 text-xl mt-4 ">
              Join millions of users already simplifying their online presence{" "}
            </p>
            <p className="text-yellow-200 text-xl  ">with just </p>
            <p className="text-yellow-200 text-xl  ">one link on Palmlink.</p>
            <div className="Input&Button ">
              <input
                className="rounded-xl p-3 mr-6"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your handle"
              />
              <button
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-3 rounded-full"
                disabled=""
                onClick={() => createTree()}
              >
                Claim Your Palmlink
              </button>
            </div>
          </div>
        </div>
        <div className="imageofmobile mt-32 ml-8">
          <Image
            alt="no image"
            width={522}
            height={482}
            src="/mobile.png"
          ></Image>
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div>devssv</div>
        <div>devssv</div>
      </section>
    </main>
  );
}
