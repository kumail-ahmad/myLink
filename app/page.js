import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-2">
        <div className="text&all">
          <div className="flex justify-center mt-11 flex-col ml-[5vw] gap-3 font-poppins">
            <p className="text-yellow-300 font-bold text-6xl">
              Everything you{" "}
            </p>
            <p className="text-yellow-300 font-bold text-5xl">
              are. In one simple,
            </p>
            <p className="text-yellow-300 font-bold text-5xl"> link in bio.</p>
            <p className="text-yellow-200 text-xl my-4 ">
              Join millions of users already simplifying their online presence
              with just one link on Palmlink. Share everything you create,
              curate, and sell from your Instagram, TikTok, Twitter, YouTube,
              and beyond—effortlessly.
            </p>
            <div className="Input&Button ">
              <input
                className="rounded-xl p-3 mr-6"
                type="text"
                value=""
                placeholder="Abcjdcjdn"
              />
              <button
                className="bg-purple-500 hover:bg-purple-400 text-white font-bold py-4 px-3 rounded-full"
                disabled=""
              >
                Claim Your Palmlink
              </button>
            </div>
          </div>
        </div>
        <div className="imageofmobile mt-12 ml-8">
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
