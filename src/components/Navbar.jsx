import React, { useState } from "react";
import { FaBars, FaCross } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isMobile, setIsMobile] = useState(false);

	const handleToggle = () => {
		setIsMobile(!isMobile);
	};

	return (
		<nav className="flex justify-between content-center px-10 py-2  lg:justify-around">
			{/* Logo */}
			<div className="logo flex justify-center content-center">
				<img
					src="https://dduconnect.in/wp-content/uploads/2018/11/cropped-Connect_logo_1000_1000-e1544269480643-3.png"
					alt=""
					className="w-auto h-10 lg:h-14"
				/>
			</div>
			{/* Toggle Button */}
			<div className="toggle flex justify-center item-center lg:hidden">
				<FaBars onClick={handleToggle} color={"teal"} size={25} />
			</div>
			{/* Nav items */}
			<div
				className={`absolute flex justify-between items-start top-0 left-0 h-full w-full z-100 bg-teal-600 m-0 px-10 py-2 space-y-10   ${
					isMobile ? "translate-x-0" : "-translate-x-full lg"
				} duration-200  lg:h-auto flex items-center lg:relative  lg:translate-x-0 lg:w-auto lg:justify-center lg:content-center lg:bg-inherit`}
			>
				<ul className="text-2xl mt-12 lg:mt-0 lg:text-xl flex flex-col lg:flex-row lg:flex  lg:justify-center lg:items-center lg:gap-5 ">
					<Link to="/">
						<li className="text-white lg:text-black mt-3 lg:mt-0">Home</li>
					</Link>
					<Link to="/buzz">
						<li className="text-white lg:text-black mt-3 lg:mt-0">Buzz</li>
					</Link>
					<Link to="/about-us">
						<li className="text-white lg:text-black mt-3 lg:mt-0">About-Us</li>
					</Link>
				</ul>
				<div className="w-10 self-start lg:hidden">
					<ImCross
						onClick={handleToggle}
						style={{ color: "white" }}
						size={20}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
