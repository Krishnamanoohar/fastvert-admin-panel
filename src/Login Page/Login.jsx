import React from "react";

const Login = () => {
  return (
    <div className="flex items-center">
      <div className="flex w-1/2 min-h-screen">
        <img
          src="https://scontent.fhyd1-4.fna.fbcdn.net/v/t39.30808-6/240600889_121988576875304_4309296170434320438_n.png?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=QQHoyjzr9zYQ7kNvgE-NLq0&_nc_ht=scontent.fhyd1-4.fna&oh=00_AYA73pVw6qbyXKAlnEx_rTJCiyq1Nu6GCj2asTeliM7kmA&oe=66AE6DF9"
          className="w-full max-h-screen"
          alt=""
          />
      </div>
      <div className="w-1/2">
        <div className="flex justify-center">
          <div className="flex flex-col gap-12 w-1/2">
            <h2 className="text-black text-center text-2xl font-bold">
              Sign in to your account
            </h2>
            <form action="" className="flex flex-col w-full gap-8">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="mail" className="font-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  className="border rounded-md border-black p-1 shadow-sm ring-gray-300"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="font-normal text-sm leading-6">
                  Password
                </label>
                <input
                  type="password"
                  className="border rounded-md border-black  p-1"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 rounded-md py-1.5 text-white"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;