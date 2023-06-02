import React from "react";

const Login2 = () => {
  return (
    <div className="bg-white px-10 py-20 rounded-md">
      <div>
        <h1 className="text-5xl font-semibold flex justify-center">
          Welcome Back
        </h1>
        <p className="font-medium text-lg text-gray-500 mt-4 flex justify-center">
          Please Enter Your Credential
        </p>
      </div>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Username</label>
          <input
            className="w-full border-gray-100 rounded-xl p-4 mt-4 bg-tranparent"
            placeholder="Enter UserName"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-gray-100 rounded-xl p-4 mt-4 bg-tranparent"
            placeholder="Enter Password"
            type="password"
          />
        </div>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" id="remember" />
            <label className="ml-2 text-base">Remember me</label>
          </div>
          <button className="font-medium text-base text-violet-500">
            Forgot Password
          </button>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 transition-all py-3 rounded-xl hover:scale-[1.01] ease-in-out bg-violet-500 text-white text-lg font-bold">
            Sign In
          </button>
          <button>Sign In with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login2;
