import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const itemId = searchParams.get("itemId");
  const res = await fetch(`https://api.startupmovement.in/v1/cart/${itemId}`, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });
  const product = await res.json();

  return NextResponse.json({ product });
}

export async function POST(req, { params }) {
  const { itemId } = params;

  const res = await fetch(`https://api.startupmovement.in/v1/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzgwOTM0MjczYzRmMTJmMmY1Yjk2ODUiLCJpYXQiOjE2ODE3MTU1NzcsImV4cCI6MzQ4MTcxNTU3NywidHlwZSI6ImFjY2VzcyJ9.5tfk3pRLcO0pFUfogDTWSBWNrRcvyUUMReJbm9vLbYE",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
    body: JSON.stringify({
      payload: { productId: String(itemId), quantity: 1 },
    }),
  });

  const product = await res.json();

  if (product.success) redirect("/cart");

  return NextResponse.json({ product });
}
