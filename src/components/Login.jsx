import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="cotainer py-20 ">
      <div className="">
        <div className="grid md:grid-cols-2  mx:auto mx-16 md:mx-32">
          <div>
            <img src="/2.png"/>
          </div>
          <div className="md:pl-8 ">
            <div className="w-full max-w-xs pt-12">
              <form method="POST">
                <div className="mb-4">
                  <h1 className="font-bold text-cyan-600 text-3xl">Hallo !</h1>
                  <h4 className="font-bold text-cyan-600">
                    Selamat Datang di PPID BUMN
                  </h4>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2 pt-5"
                    for="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline require"
                    id="username"
                    type="text"
                    placeholder="Username"
                    aria-required
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    required
                  />
                  <Link
                    className=" w-full md:mx-40  md:pl-8 pl-36 items-right inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/"
                  >
                    Forget Password ?
                  </Link>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 md:px-12 px-10 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Sign In
                  </Link>
                  <Link
                    className="border border-cyan-600 hover:border-cyan-700 text-cyan-600 hover:text-cyan-700 font-bold py-2 px-10 md:px-12 rounded focus:outline-none focus:shadow-outline"
                    to="/register"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
