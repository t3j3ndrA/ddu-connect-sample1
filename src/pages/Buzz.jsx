import React from "react";
import Announcement from "../components/Announcement";
import ArticleView from "../components/ArticleView";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BUZZ from "../assets/buzz.jpg";
const Buzz = () => {
	return (
		<div className="">
			<Navbar />
			<Announcement />
			<div className="buzz px-4 py-10">
				<h1 className="text-center text-4xl lg:text-5xl">BUZZ ZONE</h1>
				<div className="articles my-10 flex flex-col justify-center items-center gap-3 md:flex-row md:flex-grow-0 md:flex-wrap">
					<ArticleView />
					<ArticleView />
					<ArticleView />
					<ArticleView />
					<ArticleView />
					<ArticleView />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Buzz;
