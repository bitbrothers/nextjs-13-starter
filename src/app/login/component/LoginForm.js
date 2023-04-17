"use client";

import { post } from "@/app/api/common/base";

const signIn = (data) => post(`/auth/login`, data);

const LoginForm = () => {
  return (
    <form
      onSubmit={() =>
        signIn({
          email: "sobingt@gmail.com",
          password: "sobin123",
        })
      }
    >
      <div className="mb-6">
        <input
          type="text"
          placeholder="Email"
          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
          required
        />
      </div>
      <div className="mb-10">
        <button
          type="submit"
          className="border-primary w-full cursor-pointer rounded-md border bg-blue-500 py-3 px-5 text-base text-white transition hover:bg-opacity-90"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;

// <div
//   className="p-4 w-full flex border rounded-2xl mb-4"
//   key={product?.id}
// >
//   <a className="block relative w-60 h-48 rounded overflow-hidden p-5">
//     <img
//       alt="ecommerce"
//       className="object-contain object-center w-full h-full block"
//       src={product?.image}
//     />
//   </a>
//   <div className="mt-4 pl-5">
//     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">
//       {product?.category}
//     </h3>
//     <Link
//       href={`/products/${product.id}`}
//       className="text-gray-900 title-font text-2xl font-medium cursor-pointer hover:text-blue-700"
//     >
//       {product?.name}
//     </Link>
//     <p className="mt-1 font-medium text-xl">
//       ${product?.price?.basic}
//     </p>
//     <button className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4">
//       Add to cart
//     </button>
//   </div>
// </div>
