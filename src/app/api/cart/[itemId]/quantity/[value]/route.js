import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export async function POST(req, { params }) {

  const { itemId, value } = params;

  console.log('BODY', { productId: itemId, quantity: value });

  const res = await fetch(`https://api.startupmovement.in/v1/cart`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzgwOTM0MjczYzRmMTJmMmY1Yjk2ODUiLCJpYXQiOjE2ODE3MTU1NzcsImV4cCI6MzQ4MTcxNTU3NywidHlwZSI6ImFjY2VzcyJ9.5tfk3pRLcO0pFUfogDTWSBWNrRcvyUUMReJbm9vLbYE",
    },
    body: JSON.stringify({
      payload: { productId: itemId, quantity: value },
    }),
  });

  const product = await res.json();

  if (product.success) redirect("/cart");
  
  return NextResponse.json({ product });

}