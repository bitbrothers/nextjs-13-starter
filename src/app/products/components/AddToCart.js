const AddToCart = ({ productId }) => {
  return (
    <form action={`/api/cart/${productId}`} method="POST">
      <button
        type="submit"
        className="px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
      >
        Add to cart
      </button>
    </form>
  );
};

export default AddToCart;
