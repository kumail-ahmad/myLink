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
    <div className="bg-rose-300 min-h-screen justify-center ">
      <div className="photo items-center">
        <img width={200}src={item.pic} alt="" />
      </div>
    </div>
  );
}
