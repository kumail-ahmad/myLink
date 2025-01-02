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
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-1 md:grid-cols-2">
        <div className="text&all mx-3 md:mx-16">
          <div className="flex justify-center mt-32 md:mt-40 flex-col ml-[5vw] gap-3 font-poppins">
            <p className="text-[#def056] font-bold text-4xl md:text-6xl">
              Everything you are. In one{" "}
            </p>
            <p className="text-[#def056] font-bold text-4xl md:text-5xl">
               simple link in bio,
            </p>
            <p className="text-[#def056] font-bold text-4xl md:text-5xl"> </p>
            <p className="text-[#def056] md:text-lg mt-4 ">
              Join millions of users already simplifying their online presence{" "}
            </p>
            <p className="text-[#def056] md:text-xl  ">with just </p>
            <p className="text-[#def056] md:text-xl  ">one link on Palmlink.</p>
            <div className="Input&Button   ">
              <input
                className="md:rounded-3xl rounded-xl p-3 md:mr-6 w-60 md:w-auto "
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your handle"
              />
              <button
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-3 rounded-full mt-3"
                disabled=""
                onClick={() => createTree()}
              >
                Claim Your Palmlink
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block imageofmobile mt-32 ml-8">
          <Image
            alt="no image"
            width={522}
            height={482}
            src="/mobile.png"
            className="w-full md:w-auto"
          ></Image>
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2 items-center justify-center">
        <div>--Content--</div>
        <div>--Content--</div>
      
      </section>
    </main>
  );
}
