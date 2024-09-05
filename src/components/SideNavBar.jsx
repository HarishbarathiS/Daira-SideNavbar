import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/daira-logo.png";
import profile from "../assets/profile.png";
import { FiChevronsLeft } from "react-icons/fi";
import { FiChevronsRight } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const SideNavBarContext = createContext();

export default function SideNavBar({ children }) {
  const [expand, setexpand] = useState(true);

  const userDetails = {
    name: "User1",
    email: "u1@gmail.com",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/userprofile", { state: { userDetails } });
  };

  return (
    <>
      <aside className="h-screen ">
        <nav className="h-full flex  flex-col bg-[#F7F7F5] border-r shadow-sm">
          <div
            className={`p-3 pb-2  flex ${
              expand ? "justify-between items-center" : "flex-col items-center"
            }`}
          >
            <img src={logo} alt="" className="w-10" />
            <h1
              className={`text-2xl pl-2 font-semibold overflow-hidden transform  transition-transform ${
                expand ? "w-20" : "w-0"
              }`}
            >
              Daira
            </h1>

            <button
              onClick={() => {
                setexpand((curr) => !curr);
              }}
            >
              {expand ? (
                <FiChevronsLeft size={27} />
              ) : (
                <FiChevronsRight size={27} />
              )}
            </button>
          </div>

          <SideNavBarContext.Provider value={expand}>
            <ul className="flex flex-col justify-center flex-1 p-1 ">
              {children}
            </ul>
            <div className="p-1 justify-center">
              <SideNavBarItem
                icon={<IoSettingsOutline className="text-grey" size={22} />}
                text="Settings"
                route="/settings"
              />
              <SideNavBarItem
                icon={
                  <MdOutlineContactSupport className="text-grey" size={23} />
                }
                text="Support"
                route="/support"
              />
            </div>
          </SideNavBarContext.Provider>

          <div className="border-t flex p-3">
            <img
              src={profile}
              onClick={handleClick}
              alt=""
              className="w-10 h-10 ml-1 rounded-full"
            />

            <div
              className={`flex pl- items-center overflow-hidden transform  transition-all ${
                expand ? "w-20 ml-3" : "w-0"
              } `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">{userDetails.name}</h4>
                <span className="font-semibold text-xs text-gray-600">
                  {userDetails.email}
                </span>
              </div>
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
}

export function SideNavBarItem({ icon, text, active, route }) {
  const expand = useContext(SideNavBarContext);
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(route)}
      className={`relative flex items-center py-4 pl-6 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-[#F2C94C] to-[#F2994A] text-[#333333] "
          : "hover:bg-[#F2994A] hover:text-[#333333] text-gray-600"
      }`}
    >
      {icon}

      <span
        className={`ml-3 text-xl font-medium overflow-hidden transform  transition-transform ${
          expand ? "w-32 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
    </li>
  );
}
