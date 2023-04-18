// import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.body;
  // console.log(data);
  const formData = {};

  for await (const part of data) {
    console.log(part);
    const name = part.name;

    if (part.filename) {
    } else {
      const value = await part.text();
      formData[name] = value;
    }
  }

  console.log(formData);

  // const { searchParams } = new URL(req.url);
  // const id = searchParams.get("email");
  // const resp = await req.json();
  // const { headers, body } = request;
  // const contentType = headers.get("content-type");
  // console.log(headers, contentType);
  // const res = await fetch(`https://api.startupmovement.in/v1/login`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Cache-Control": "s-maxage=1, stale-while-revalidate",
  //   },
  //   body: JSON.stringify({
  //     payload: { email: "sobingt@gmail.com", password: "sobin123" },
  //   }),
  // });
  // const data = await res.json();
  // console.log(data);
  // if (product.success) redirect("/cart");
  // return NextResponse.json({ data });
  // const { headers, body } = request;
  // const contentType = headers.get("content-type");
  // console.log("BODY", request);
  // if (contentType === "application/json") {
  //   // Parse the JSON body
  //   const data = await request.json();
  //   // Process the data and return a response
  //   const response = { message: "Data received successfully", data };
  //   // Send a JSON response with a status code of 200 OK
  //   return NextResponse.json({ request, status: 200, response });
  // } else if (contentType === "application/x-www-form-urlencoded") {
  //   // Parse the URL-encoded body
  //   const data = querystring.parse(body);
  //   // Process the data and return a response
  //   const response = { message: "Data received successfully", body };
  //   // Send a JSON response with a status code of 200 OK
  //   return NextResponse.json({ request, status: 200, response });
  // } else {
  //   // Unsupported content type
  //   return NextResponse.json({
  //     request,
  //     status: 415,
  //     message: "Unsupported media type",
  //   });
  // }
}
