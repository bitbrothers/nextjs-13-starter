const LoginForm = () => {
  return (
    <form action="/api/login" method="POST">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="bordder-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
          required
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          placeholder="Password"
          name="password"
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
