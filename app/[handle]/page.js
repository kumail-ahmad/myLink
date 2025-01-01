import Link from "next/link";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const item={
    
      "_id": {
        "$oid": "677554c622a9a0f2f25bab61"
      },
      "links": [
        {
          "link": "localhost:3000/generate",
          "linktext": "local"
        }
      ],
      "handle": "mubrek",
      "pic": "https://avatars.githubusercontent.com/u/144327213?v=4"
    }
  
  return (
    <div className="bg-rose-300 min-h-screen flex justify-center items-start ">
    <div className="photo flex flex-col justify-center items-center gap-3 mt-3 ">
      <img
        src={item.pic}
        alt="Users picture"
        width={170}
        className="rounded-full border-4 border-white shadow-lg"
      />
      <span className="font-bold text-xl">@{item.handle}</span>
      <div className="links">
        {item.links.map((item,index)=>{
          return <div className="py-2 px-2 bg-white rounded-md my-3 shadow-lg" key={index}>
           <Link href={item.link}> {item.linktext}</Link>
            
          </div>
        })}
      </div>
      </div>
    </div>
  );
}
