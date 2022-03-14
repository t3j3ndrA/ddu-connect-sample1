import React from "react";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ABOUT_US from "../assets/aboutus.jpg";
const AboutUs = () => {
	return (
		<div>
			<Navbar />
			<Announcement />
			<div
				className="about-us px-5 py-10 flex flex-col justify-center items-center 
            gap-4 lg:flex lg:flex-row"
			>
				<div className="content lg:w-1/2">
					<h1 className="text-center text-4xl lg:text-left lg:text-5xl ">
						About Us
					</h1>
					<p className="text-xl text-justify mt-3">
						DDU Connect started on 17th March, 2012 with an aim to 'Connect all
						faculties of Dharmsinh Desai University and to provide a platform
						for all students to showcase their creativity. The journey began
						with a 16 page tabloid by the tagline “For the students, By the
						students”. DDU Connect covers all the latest events happening around
						the university. It also interviews various eminent personas across
						the country and alumni of the university. DDUConnect has grown
						exponentially since its launch. It held a Photography exhibition and
						played an active part in the University Foundation Day event, which
						witnessed a Guinness record being established.
					</p>
					<div className="flex justify-center mt-3 lg:justify-start">
						<button className="bg-teal-600 text-white  rounded-2xl hover:bg-teal-700 w-48 py-2 px-4">
							Stay Connected Here
						</button>
					</div>
				</div>
				<div className="w-full lg:w-1/2  overflow-hidden  rounded">
					<img
						src={ABOUT_US}
						alt=""
						className="overflow-hidden w-full h-auto object-contain
                        shadow-2xl
                        rounded-2xl
                    py-5
                    "
					/>
				</div>
			</div>
			<div
				className="highlights bg-gray-100 px-5 py-20 flex flex-col justify-center items-center 
            gap-4 lg:flex lg:flex-row"
			>
				<iframe
					className="w-full lg:w-1/2 h-72"
					src="https://www.youtube.com/embed/xBd-cxcWumY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
				<div className="content lg:w-1/2">
					<h1 className="text-center text-4xl lg:text-right lg:text-5xl ">
						Highlights
					</h1>
					<p className="text-xl text-justify mt-3">
						DDU Connect covers all the latest events happening around the
						university. It also interviews various eminent personas across the
						country and alumni of the university. DDUConnect has grown
						exponentially since its launch. It held a Photography exhibition and
						played an active part in the University Foundation Day event, which
						witnessed a Guinness record being established.
					</p>
					<div className="flex justify-center mt-3 lg:justify-end">
						<button className="bg-teal-600 text-white  rounded-2xl hover:bg-teal-700 w-36 py-2 px-4">
							Watch More
						</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutUs;
