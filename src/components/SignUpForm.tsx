const SignUpForm = () => {
  return (
    <div className="h-screen flex flex-col items-center ">
      <div className="bg-white shadow-lg w-1/2 px-20 box-border">
        <h1 className="text-2xl font-bold pt-5">Join the Community</h1>
        <p className="font-semibold mt-3 space-x-2">
          Take your beautiful art to the next level.Get it sceen by
        </p>
        <p className="font-semibold">Millions of People</p>
        <div className="flex flex-col items-center">
          <button className="bg-blue-700 text-white w-4/5 px-2 rounded py-2 mt-3">
            Join with Facebook
          </button>

          <p className="font-semibold mt-4 mb-4">OR</p>

          <div className="flex justify-center gap-2 w-4/5">
            <input
              className="border-gray-500 border-2 py-1 px-1 w-1/2"
              type="text"
              placeholder="First Name"
            />
            <input
              className="border-gray-500 border-2 py-1 px-1 w-1/2"
              type="text"
              placeholder="Last Name"
            />
          </div>

          <div className="mt-4 w-4/5">
            <input
              className="border-gray-500 border-2 py-1 px-1 rounded w-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-4 w-4/5">
            <input
              className="border-gray-500 border-2 py-1 px-1 rounded w-full"
              type="password"
              placeholder="password"
            />
          </div>

          <button className="bg-blue-900 text-white w-4/5 px-2 rounded py-2 mt-3">
            Create New Account
          </button>
          <p className="mt-4">
            By joining you agree our terms of Service and Privacy
          </p>
          <p className="mb-10">Policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
