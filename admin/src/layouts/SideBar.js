import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faFolder, faInbox, faUser, faCog, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function SideBar() {
  const location = useLocation();

  const links = [
    // { to: "/Admin/Dashboard", icon: faHome, label: "Dashboard" },
    { to: "/Admin/Posts", icon: faFileAlt, label: "Mods" },
    { to: "/Admin/Posts", icon: faFolder, label: "Categories" },
    { to: "Admin/Posts", icon: faInbox, label: "State" },
    { to: "Admin/Posts", icon: faUser, label: "Accounts" },
    { to: "/Admin/Posts", icon: faCog, label: "Settings" },
    { to: "/Logout", icon: faSignOutAlt, label: "Logout" },
  ];

  return (
    <nav className="border-r bg-white h-screen p-4 w-64 pt-10">
      {links.map((link) => (
        <Link key={link.to} to={link.to} aria-label={link.label}>
          <div
            className={`flex items-center text-black-300 hover:text-green-800 cursor-pointer rounded-md p-2 mb-2 ${
              location.pathname === link.to ||
              (location.pathname === "/Admin/Posts" && link.to === "/Admin/Posts") ? "bg-gray-200" : ""
            }`}
          >
            <FontAwesomeIcon icon={link.icon} className="mr-3 text-green-500" />
            <span>{link.label}</span>
          </div>
        </Link>
      ))}
    </nav>
  );
}

export default SideBar;
