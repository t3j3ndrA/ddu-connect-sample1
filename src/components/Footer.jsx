import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { ImMail, ImLocation } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<div className="footer px-5 py-10 bg-slate-200 lg:flex lg:flex-row lg:justify-between gap:4">
			{/* Left */}
			<div className="left flex flex-col gap-2 lg:w-1/3">
				<div className="logo flex justify-center content-center">
					<img
						src="https://dduconnect.in/wp-content/uploads/2018/11/cropped-Connect_logo_1000_1000-e1544269480643-3.png"
						alt=""
						className="w-auto h-16"
					/>
				</div>

				<p className="text-center mt-2 lg:text-left">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum placeat
					assumenda ipsum ex eius! Beatae obcaecati laboriosam ab adipisci
					expedita illum magnam ipsum doloremque facere!
				</p>
			</div>

			{/* Center */}
			<div className="center mt-5 hidden lg:block lg:w-1/3">
				<h2
					className="font-bold  
                text-2xl text-center"
				>
					Quick Links
				</h2>
				<ul className="flex flex-col items-center  mt-2">
					<Link to="/">
						<li className="block">Home</li>
					</Link>
					<Link to="/buzz">
						<li className="block">Buzz Zone</li>
					</Link>
					<Link to="/about-us">
						<li className="block">About Us</li>
					</Link>
				</ul>
			</div>

			{/* Right  */}
			<div className="right mt-5">
				<h2
					className="font-bold  
                text-2xl text-center lg:text-right"
				>
					Contact Us
				</h2>
				<div className="hidden  mt-3 iconbox lg:flex flex-col items-end gap-2 ">
					<div className="iconitem flex gap-3">
						<AiOutlineMail size={28} color={"teal"} />
						<span>dduconnect@ddu.ac.in</span>
					</div>
					<div className="iconitem flex gap-3">
						<GoLocation size={28} color={"teal"} />
						<span>Nadiad, Gujarat.</span>
					</div>
				</div>

				<div className="icons flex justify-center lg:justify-end gap-4 mt-5">
					<FaInstagram size={35} color={"teal"} />
					<FaFacebook size={35} color={"teal"} />
					<FaLinkedin size={35} color={"teal"} />
					<FaTwitter size={35} color={"teal"} />
				</div>
			</div>
		</div>
	);
};

export default Footer;
