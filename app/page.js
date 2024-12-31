import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-customGreen min-h-[100vh] grid grid-cols-2">
        <div>
          <div classname="flex justify-center flex-col ml-[10vw] gap-3 ">
            <p className="text-yellow-300 font-bold text-7xl">
              Everything you{" "}
            </p>
            <p className="text-yellow-300 font-bold text-7xl">
              are. In one simple,
            </p>
            <p className="text-yellow-300 font-bold text-7xl"> link in bio.</p>
            <p className="text-yellow-300 text-xl my-4">
              Join 50M+ people using Linktree for their link in bio. One link to
              help you share everything you create, curate and sell from your
              Instagram, TikTok, Twitter, YouTube and other social media
              profiles.
            </p>
          </div>
        </div>
        <div>dnfnn</div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh]"></section>
    </main>
  );
}
