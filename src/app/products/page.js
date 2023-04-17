import Link from "next/link";
import AddToCart from "./components/AddToCart";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Products() {
  const {
    data: { results: products },
  } = await getData();
  // console.log(products);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products?.map((product) => (
            <div
              className="p-4 w-full flex border rounded-2xl mb-4"
              key={product?.id}
            >
              <a className="block relative w-60 h-48 rounded overflow-hidden p-5">
                <img
                  alt="ecommerce"
                  className="object-contain object-center w-full h-full block"
                  src={`${process.env.NEXT_PUBLIC_API_URL}/media/${product?.image?.filename}`}
                />
              </a>
              <div className="mt-4 pl-5">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
                  {product?.category?.name}
                </h3>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-gray-900 title-font text-2xl font-medium cursor-pointer hover:text-blue-700"
                >
                  {product?.name}
                </Link>
                <p className="mt-1 font-medium text-xl">
                  ${product?.price?.basic}
                </p>

                <AddToCart productId={product.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
