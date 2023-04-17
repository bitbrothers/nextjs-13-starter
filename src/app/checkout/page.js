import { getCart } from "../api/cart/route";

const Checkout = async () => {
  const { data } = await getCart();

  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <h2 className="font-medium text-gray-900">Your Order</h2>
            </div>

            <div>
              <div className="flow-root">
                <ul className="-my-4 divide-y divide-gray-100">
                  {data?.items?.map((cartItem) => (
                    <li
                      className="flex items-center gap-4 py-4"
                      key={cartItem?.id}
                    >
                      <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="h-16 w-16 rounded object-cover"
                      />

                      <div>
                        <h3 className="text-sm text-gray-900">
                          {cartItem?.product?.name}
                        </h3>

                        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                          <div>
                            <dt className="inline">Quantity:</dt>
                            <dd className="inline">{cartItem.quantity}</dd>
                          </div>
                        </dl>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mt-1 text-sm text-gray-600">Total</p>
              <p className="text-2xl font-medium tracking-tight text-gray-900">
                ${data?.subTotal}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label
                  for="FirstName"
                  className="block text-xs font-medium text-gray-700"
                >
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div className="col-span-3">
                <label
                  for="LastName"
                  className="block text-xs font-medium text-gray-700"
                >
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Email"
                  className="block text-xs font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <div className="col-span-6">
                <label
                  for="Phone"
                  className="block text-xs font-medium text-gray-700"
                >
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
              </div>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Card Details
                </legend>

                <div className="mt-1 rounded-md bg-white shadow-sm">
                  <div>
                    <label for="CardNumber" className="sr-only">
                      {" "}
                      Card Number{" "}
                    </label>

                    <input
                      type="text"
                      id="CardNumber"
                      placeholder="Card Number"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>

                  <div className="flex mt-6 gap-6">
                    <div className="flex-1">
                      <label for="CardExpiry" className="sr-only">
                        {" "}
                        Card Expiry{" "}
                      </label>

                      <input
                        type="text"
                        id="CardExpiry"
                        placeholder="Expiry Date"
                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                      />
                    </div>

                    <div className="-ms-px flex-1">
                      <label for="CardCVC" className="sr-only">
                        {" "}
                        Card CVC{" "}
                      </label>

                      <input
                        type="text"
                        id="CardCVC"
                        placeholder="CVC"
                        className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                      />
                    </div>
                  </div>
                </div>
              </fieldset>

              <fieldset className="col-span-6">
                <legend className="block text-sm font-medium text-gray-700">
                  Billing Address
                </legend>

                <div className="mt-1 rounded-md bg-white shadow-sm">
                  <div>
                    <label for="Country" className="sr-only">
                      Country
                    </label>

                    <select
                      id="Country"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    >
                      <option>England</option>
                      <option>Wales</option>
                      <option>Scotland</option>
                      <option>France</option>
                      <option>Belgium</option>
                      <option>Japan</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="sr-only" for="PostalCode">
                      {" "}
                      ZIP/Post Code{" "}
                    </label>

                    <input
                      type="text"
                      id="PostalCode"
                      placeholder="ZIP/Post Code"
                      className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                </div>
              </fieldset>

              <div className="col-span-6">
                <button className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">
                  Pay Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
