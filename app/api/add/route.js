import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("Palmlink");
  const collection = db.collection("links");


// If the handle is alreay taken, you cannot create a palmlink with that handle
const doc=await collection.findOne({handle:body.handle});
if (doc){
  return Response.json({
    success: false,
    error: true,
    message: "Handle already taken",
    result: null,
  });
}

  const result = await collection.insertOne(body);
  console.log(body);
  return Response.json({
    success: true,
    error: false,
    message: "Your palmlink has been created !!!",
    result: result,
  });
}
