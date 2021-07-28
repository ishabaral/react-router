import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import { data } from "../placeData";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    cName: "nav-text",
  },
  {
    title: "Places",
    path: "/places",
    icon: <FiIcons.FiMapPin />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <CgIcons.CgProfile />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <MdIcons.MdSettings />,
    cName: "nav-text",
  },
  {
    title: "CreateUser",
    path: "/createUser",
    icon: <FiIcons.FiUserPlus />,
    cName: "nav-text",
  },
  {
    title: "Users",
    path: "/users",
    icon: <FiIcons.FiUsers />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    //path: '/logout',
    icon: <BiIcons.BiLogOutCircle />,
    cName: "nav-text logout",
  },
];
