import Link from "next/link";
import RootLayout from "../layout";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const products = await getData();

  return (
    <RootLayout>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products?.map((product) => (
              <div
                className="p-4 w-full flex border rounded-2xl mb-4"
                key={product.id}
              >
                <a className="block relative w-60 h-48 rounded overflow-hidden p-5">
                  <img
                    alt="ecommerce"
                    className="object-contain object-center w-full h-full block"
                    src={product.image}
                  />
                </a>
                <div className="mt-4 pl-5">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
                    {product.category}
                  </h3>
                  <Link
                    href={`/products/${product.id}`}
                    className="text-gray-900 title-font text-2xl font-medium cursor-pointer hover:text-blue-700"
                  >
                    {product.title}
                  </Link>
                  <p className="mt-1 font-medium text-xl">${product.price}</p>
                  {/* <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4">
                  Add to cart
                </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </RootLayout>
  );
}
