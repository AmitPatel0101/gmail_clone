import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: "Shrey",
        email: "sample@txt.com",
        password: "123456",
      }),
    })
    .then((rawData) => rawData.json())
    .then((res) => console.log(res))
  }
    // const data = await response.json();
    // console.log(data);
  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form action="" onSubmit={handleSignupSubmit} className=" flex flex-col gap-3 bg-white p-4 w-[22%]">
        <h1 className=" font-bold text-2xl uppercase my-2">Signup</h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded-md px-2 py-1"
        />
        <button
          type="submit"
          className=" bg-gray-800 p-2 text-white my-2 rounded-md"
        >
          Signup
        </button>
        <p>
          Already have an account?{" "}
          <Link className=" text-blue-600" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
