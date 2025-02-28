import React from "react";
import { Link } from "react-router-dom";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminName } from "../Api/Api";
function Nav(){
return(
    <nav className="border bg-white p-4 flex justify-between items-center">
        <Link to="/Admin/">
            <h3 className="">GTA-V Admin Panel</h3>
        </Link>
        <div className="flex items-center space-x-4">
            <div className="flex ">
                <p type="text" placeholder="Admin name" className="bg-white p-2 rounded" ><AdminName/></p>
                <img src="https://www.craftifyproductions.com/assets/GTAV_logo-nIzZPuzj.webp" className="w-10 h-10 rounded" alt="" />
                <p className="bg-white p-2 rounded hover:cursor-pointer">
{/*                     <Link to="/Logout">
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </Link> */}
                </p>
            </div>
        </div>
    </nav>

);
}
export default Nav;