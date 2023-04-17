import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const res = await fetch("https://api.startupmovement.in/v1/products", {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });
  const products = await res.json();

  return NextResponse.json({ products });
}
