import Link from "next/link";
import clientPromise from "../lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("Palmlink");
  const collection = db.collection("links");

  // If the handle is alreay taken, you cannot create a palmlink with that handle
  const item = await collection.findOne({ handle: handle });

  if (!item) {
    return notFound();
  }

  const item2 = {
    _id: {
      $oid: "6775664822a9a0f2f25bab63",
    },
    links: [
      {
        link: "https://github.com/kumail-ahmad",
        linktext: "Github",
      },
    ],
    handle: "kumail-ahmad",
    pic: "https://avatars.githubusercontent.com/u/144327213?v=4",
  };

  return (
    <div className="bg-[#e2d1b9] min-h-screen flex justify-center items-start ">
      {item && (
        <div className="photo flex flex-col justify-center items-center gap-3 mt-3 ">
          <img
            src={item.pic}
            alt="Users picture"
            width={170}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <span className="font-bold text-xl font-serif">@{item.handle}</span>
          <div className="links">
            {item.links.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  {" "}
                  <div className="py-4 px-2 min-w-96 bg-white  my-3 shadow-lg  text-center rounded-full ">
                    {item.linktext}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
