import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  const client = await clientPromise;
  const db = client.db("Palmlink");
  const collection = db.collection("links");

  const result = await collection.insertOne(body);
  console.log(body);
  return Response.json({
    success: true,
    error: false,
    message: "Your palmlink has been created !!!",
    result: result,
  });
}
