import React, { useContext } from "react";
import { IoMdSend, IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import {
  MdDrafts,
  MdInbox,
  MdMore,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
  MdOutlineSend,
  MdOutlineWatchLater,
} from "react-icons/md";
import { TbSend2 } from "react-icons/tb";
import messageContext from "../Context/messageContext";

const sidebarItems = [
  {
    icon: <MdInbox size={"22px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"22px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"22px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"22px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"22px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"22px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  const {open, setOpen} = useContext(messageContext)

  return (
    <div className="w-[15%]">
      <div className=" p-3 ">
        <button
          onClick={() => setOpen(true)}
          className=" flex items-center gap-2 bg-[#C2E7FF] p-4 rounded-2xl hover:shadow-md"
        >
          <LuPencil size={"24px"} />
          Compose
        </button>
      </div>

      <div className=" text-gray-600">
        {sidebarItems.map((item, index) => (
          <>
            <div
              className=" flex items-center pl-6 py-1 rounded-r-full gap-4 my-2
         hover:bg-gray-200 hover:cursor-pointer"
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
