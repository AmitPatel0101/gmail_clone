import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";



import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import Emails from "./Emails";

const mailType = [
  {
    icon: <MdInbox size={"22px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"22px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"22px"} />,
    text: "Social",
  },
];

const Inbox = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className=" flex-1 bg-white rounded-xl mx-5 ">
      {/* Child 1 */}
      <div className="flex items-center justify-between px-4 my-2">

        {/* Sub child 1 */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"22px"} />
            <FaCaretDown size={"22px"} />
          </div>
          <div className=" p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdRefresh size={"22px"} />
          </div>
          <div className=" p-2 rounded-full hover:bg-gray-200 cursor-pointer">
            <IoMdMore size={"22px"} />
          </div>
        </div>

        {/* Sub child 2 */}
        <div className="flex items-center gap-2">
          <span>1 to 50</span>
          <MdKeyboardArrowLeft className=" hover:text-gray-500" size={"22px"} />
          <MdKeyboardArrowRight
            className=" hover:text-gray-500"
            size={"22px"}
          />
        </div>
      </div>






      {/* Child 2 */}
      <div className="h-90vh overflow-y-auto">
        <div className=" flex items-center gap-1">
          {mailType.map((item, index) => (
            <button
              onClick={() => setSelected(index)}
              className={`${
                selected === index
                  ? " border-b-4 border-b-blue-600 text-blue-600"
                  : "border-b-4 border-b-transparent"
              } flex items-center p-4 gap-5 w-52 hover:bg-gray-100`}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Child 3 */}
      <Emails />

    </div>
  );
};

export default Inbox;
