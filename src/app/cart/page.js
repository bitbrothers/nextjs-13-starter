import Link from "next/link";
import { getCart } from "../api/cart/route";
import UpdateQuantityButton from "./components/UpdateQuantityButton";

const Cart = async () => {
  const { data } = await getCart();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Your Cart
          </h1>
        </header>

        <div className="mt-8">
          <table className=" table w-full">
            <thead className="border-b-2">
              <tr>
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">SubTotal</th>
              </tr>
            </thead>
            <tbody>
              {data?.items?.map((cartItem) => (
                <tr key={cartItem._id} className="py-2 border-b-2">
                  <td className="flex items-center gap-2">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}/media/${cartItem?.product?.image?.filename}`}
                      alt=""
                      className="h-16 w-16 rounded object-cover"
                    />
                    <h3 className="text-sm text-gray-900">
                      {cartItem?.product?.name}
                    </h3>
                  </td>
                  <td>{cartItem.price}</td>

                  <td>
                    <div className="flex items-center">
                      <UpdateQuantityButton productId={cartItem?.product?.id} action={'increment'} quantityValue={cartItem.quantity} />
                      <div className="flex w-fit items-center justify-center py-1 px-5 border-2">
                        {cartItem.quantity}
                      </div>
                      <UpdateQuantityButton productId={cartItem?.product?.id} action={'decrement'} quantityValue={cartItem.quantity} />
                    </div>


                  </td>
                  <td>{cartItem.total}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
            <div className="w-screen max-w-lg space-y-4">
              <dl className="space-y-0.5 text-sm text-gray-700">
                <div className="flex justify-between !text-base font-medium">
                  <dt>Total</dt>
                  <dd>${data?.subTotal}</dd>
                </div>
              </dl>

              <div className="flex justify-end">
                <Link
                  href="/checkout"
                  className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
