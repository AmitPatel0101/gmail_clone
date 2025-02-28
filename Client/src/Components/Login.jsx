import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const rawData = await fetch("http://localhost:8080/api/v1/user/login", {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body : JSON.stringify({email : "shrey@gmail.com", password : "shrey"})
    })

    const response = await rawData.json()
    console.log(response);
  }

  return (
    <div className="flex items-center justify-center w-screen mt-10">
      <form onSubmit={handleLoginSubmit} action="" className=" flex flex-col gap-3 bg-white p-4 w-[22%]">
        <h1 className=" font-bold text-2xl uppercase my-2">Login</h1>
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
          Login
        </button>
        <p>Don't have an account? <Link className=" text-blue-600" to={"/signup"}>Register Now</Link></p>

      </form>
    </div>
  );
};

export default Login;
