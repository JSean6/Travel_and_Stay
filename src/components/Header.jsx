import React from "react";
import "../Header.css"
import { FaBed } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";

const Header = () => {
    return (
        <>
            <section>
                <div className="header">
                <div className="headerConatiner">
                    <div className="headerList">
                    <div className="headerListItem">
                    <FaBed />
                        <span>Stays</span>
                    </div>
                </div>
                <div className="headerListItem">
                    <FaPlane />
                    <span>flights</span>
                </div>
                <div className="headerListItem">
                    <FaCar />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FaBed />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FaTaxi />
                    <span>Airport taxis</span>
                </div>
                </div>
                </div>
                  <div className="headerSearch">
                    <div className="headerSearchItem">
                        <input type="text" 
                        placeholder="Where are you going?"
                        className="headerSearchInput"
                        />
                    </div>
                    <div className="headerSearchItem">
                        <FaCalendarDays />
                    <span className="headerSearchText">Date to date</span>
                    </div>
                    <div className="headerSearchItem">
                        <FaBed />
                    <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>

                  </div>
            </section>
        </>
    )
}

export default Header;