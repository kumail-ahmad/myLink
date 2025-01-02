import Link from "next/link";

export default function Page() {
  const item = {
    _id: {
      $oid: "6775664822a9a0f2f25bab63",
    },
    links: [
      {
        link1: "https://github.com/kumail-ahmad",
        linktext1: "Github",
        link2: "https://github.com/kumail-ahmad",
        linktext2: "LinkedIn",
        link3: "https://github.com/kumail-ahmad",
        linktext3: "Vercel",
      },
    ],
    handle: "kumail-ahmad",
    pic: "https://avatars.githubusercontent.com/u/144327213?v=4",
  };

  return (
    <div className="bg-[#e2d1b9] min-h-screen flex justify-center items-start  ">
      <div className="photo flex flex-col justify-center items-center gap-3 mt-36">
        <img
          src={item.pic}
          alt="Users picture"
          width={170}
          className="rounded-full border-4 border-white shadow-lg"
        />
        <span className="font-bold text-xl font-serif">@{item.handle}</span>
        <div className="links">
          {item.links.map((item, index) => (
            <div key={index} className="container">
              <Link href={item.link1}>
                <div className="py-4 px-2 min-w-96 bg-white my-3 shadow-lg text-center rounded-full">
                  {item.linktext1}
                </div>
              </Link>
              <Link href={item.link2}>
                <div className="py-4 px-2 min-w-96 bg-white my-3 shadow-lg text-center rounded-full">
                  {item.linktext2}
                </div>
              </Link>
              <Link href={item.link3}>
                <div className="py-4 px-2 min-w-96 bg-white my-3 shadow-lg text-center rounded-full">
                  {item.linktext3}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
