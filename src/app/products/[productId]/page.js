import AddToCart from "../components/AddToCart";

async function getProduct(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const ProductId = async ({ params }) => {
  const { data: product } = await getProduct(params.productId);
  // console.log(product);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container  py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/3 w-full lg:h-auto max-h-96 h-64 object-contain object-center rounded"
            src={`${process.env.NEXT_PUBLIC_API_URL}/media/${product?.image?.filename}`}
          />
          <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">
              {product.category?.name}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.name}
            </h1>

            <p className="leading-relaxed">{product?.description?.short}</p>

            <div className="flex mt-6">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product?.price?.basic}
              </span>
              {/* <button
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  onClick={() => putCart(params?.productId)}
                >
                  Add to cart
                </button> */}
            </div>
            <AddToCart productId={product.id} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductId;
