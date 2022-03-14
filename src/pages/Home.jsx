import React from "react";
import Navbar from "../components/Navbar";
// import Slider from "../components/slider";
import Announcement from "../components/Announcement";
import CONNECT_MAIN from "../assets/connect-main.jpg";
import IMG_10 from "../assets/10.jpg";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
const Home = () => {
	return (
		<>
			<Navbar />

			<Announcement />
			{/* <Slider /> */}

			{/* First section main */}

			<div className="my-12 flex flex-col gap-3 lg:px-5 lg:flex-row lg:gap-4 ">
				<div className="content  px-10 flex flex-col justify-center lg:content-start lg:w-1/2 ">
					<h1 className="text-4xl text-bold text-center lg:text-left xl:text-5xl">
						DDU CONNECT
					</h1>
					<h2 className="text-3xl text-center lg:text-left text-bold mt-2  xl:text-4xl">
						Redefining Conventions
					</h2>
					<p className="flex text-center lg:text-left mt-3 lg:text-xl">
						Where an Individual's thinking is presented in the form of art and
						words. A place where solidarity exists not just in mere words but in
						actions itself.
					</p>
					<div className="flex justify-center content-center lg:justify-start">
						<button
							className="
							mt-3
						w-64
					  bg-teal-600  px-4 py-2 border-2 border-green 
						cursor-pointer rounded-2xl duration-200
						text-white
					  hover:bg-teal-700
					  "
						>
							CONNECT NOW
						</button>
					</div>
				</div>

				{/* Image of connecting peoples*/}
				<div className="w-full lg:w-1/2 ">
					<img
						src={CONNECT_MAIN}
						className="w-full object-cover overflow-hidden lg:rounded-2xl"
					/>
				</div>
			</div>

			{/* 2nd section  */}
			<div className="mt-12 bg-gray-100 py-20 flex flex-col gap-3 lg:px-5 lg:flex-row lg:gap-4 ">
				{/* Image of 10*/}
				<div className="w-full lg:w-1/2 ">
					<img
						src={IMG_10}
						className="w-full object-cover overflow-hidden lg:rounded-2xl"
					/>
				</div>
				<div className="content  px-10 flex flex-col justify-center lg:content-start lg:w-1/2 ">
					{/* Heading */}
					<h1 className="text-4xl text-bold text-center lg:text-right xl:text-5xl">
						DDU CONNECT
					</h1>
					{/* Desctiptions */}
					<h2 className="text-3xl text-center lg:text-right text-bold mt-2  xl:text-4xl">
						10th Volume
					</h2>
					<p className="text-center lg:text-right mt-3 lg:text-xl">
						Where an Individual's thinking is presented in the form of art and
						words. A place where solidarity exists not just in mere words but in
						actions itself. The 10th volume symbolises a pivot moment for DDU
						Connect as it relish the Lorem ipsum dolor sit amet consectetur,
						adipisicing elit. Quibusdam, voluptatum more dynamism and exubreance
						in the coming year of our club.
					</p>
				</div>
			</div>

			{/* Placement Manias */}

			<div className="placements-mania"></div>

			{/* From the editors desk */}

			<div className="lg:px-5 py-10 pt-20 bg-teal-900 text-white">
				<h1 className="text-4xl text-bold text-center xl:text-5xl">
					From The Editor's Desk
				</h1>
				<div className="px-10 mt-10 flex flex-col gap-8 lg:flex-row">
					<p className="text-justify mt-3 lg:text-xl">
						“Kintsugi or Kintsukuroi (“golden joinery”) is the centuries-old
						Japanese art of putting broken pottery pieces back together with
						golden adhesive that enhances the break lines, thus making the piece
						unique.” Having scars or being broken isn't shameful. When we
						embrace the beauty of improving imperfections, we create an even
						stronger, resilient, and the most stunning version of ourselves.
						Acceptance and Improvisation is the art everyone must master. Life
						is going to be tough and you might fall, but the beauty is in
						standing up and never giving up.
					</p>
					<p className="text-justify mt-3 lg:text-xl">
						By understanding, and embracing our fellow students' interests we
						aim to build stronger and lasting impressions that will multiply in
						terms of readers and contributors. Our writers are ready to take you
						on a new expedition through the Open Letter, Fiction, 'Tech' It
						Easy, Connections, and Writer's Lounge. Get to know the various
						events taking place in the university through the DDU Buzz. Also for
						the creative minds of our university, we are soon bringing back our
						art-related page named 'Artistic Visions'. We, as always, await your
						stories of adventures and experiences at dduconnect@gmail.com.
					</p>
				</div>
				<div className="by mt-5 px-10">
					<p className="text-right font-bold text-2xl text-white">
						Muskan Vora
					</p>
					<p className="text-right text-xl text-white">Editor in Cheif</p>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Home;
