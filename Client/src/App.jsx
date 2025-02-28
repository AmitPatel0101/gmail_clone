import { createElement, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Inbox from "./Components/Inbox";
import LearnTailwind from "./assets/LearnTailwind";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mail from "./Components/Mail";
import SendEmail from "./Components/SendEmail";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Emails from "./Components/Emails";
import Email from "./Components/Email";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Inbox />} />
      <Route path="/mail/:id" element={<Mail />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Route>
  )
)


function App() {
  return (
    <div className="bg-[#F6F8FC] h-screen">
     <RouterProvider router={router}/>     
    </div>
  );
}

export default App;

// const appRouter = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Body />}>
//         <Route path="/" element={<Inbox />} />
//         <Route path="/mail/:id" element={<Mail />} />
//       </Route>
       
//       <Route path="/" element={<AuthBody />}>
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<Signup />} />
//       </Route>
//     </>
//   )
// );