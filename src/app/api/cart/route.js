export async function getCart() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MzgwOTM0MjczYzRmMTJmMmY1Yjk2ODUiLCJpYXQiOjE2ODE3MTU1NzcsImV4cCI6MzQ4MTcxNTU3NywidHlwZSI6ImFjY2VzcyJ9.5tfk3pRLcO0pFUfogDTWSBWNrRcvyUUMReJbm9vLbYE",
      "Cache-Control": "s-maxage=1, stale-while-revalidate",
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
