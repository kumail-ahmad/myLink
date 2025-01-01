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
    <div className="bg-rose-300 min-h-screen flex justify-center items-center ">
    <div className="photo flex flex-col justify-center items-center gap-3 transform -translate-y-20">
      <img
        src={item.pic}
        alt="Users picture"
        width={170}
        className="rounded-full border-4 border-white shadow-lg"
      />
      <span className="font-bold">@{item.handle}</span>
      </div>
    </div>
  );
}
