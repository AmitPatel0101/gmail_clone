import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSearch, IoIosSearch } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";

const Navbar = () => {
  const user = true;

  return (
    <div className="flex items-center justify-between mx-3 h-16">


      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="rounded-full p-2 hover:bg-gray-200 cursor-pointer">
            <RxHamburgerMenu size={"22px"} />
          </div>
        </div>
        <img
          className=" w-8"
          src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
          alt="Gmail Logo"
        />
        <h1 className=" text-2xl text-gray-500 font-medium">Gmail</h1>
      </div>

      {/* {user && ( */}
        {/* <> */}

          <div className="w-[50%] mr-60">
            <div className=" flex items-center bg-[#EAF1F8] px-2 py-3 rounded-full ">
              <IoMdSearch size={"24px"} className=" text-gray-700" />
              <input
                type="text"
                placeholder="Search for mail"
                className=" rounded-full w-full bg-transparent outline-none px-1"
              />
            </div>
          </div>

          <div className=" flex items-center gap-2">
            <div className=" p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <FaRegQuestionCircle size={"24px"} />
            </div>
            <div className=" p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <IoIosSettings size={"24px"} />
            </div>
            <div className=" p-3 rounded-full hover:bg-gray-200 cursor-pointer">
              <TbGridDots size={"24px"} />
            </div>
            <Avatar googleId="118096717852922241760" size="40" round={true} />
          </div>
          
        {/* </> */}
      {/* )} */}
    </div>
  );
};

export default Navbar;
