import React from "react";
import ARTICLE_VIEW from "../assets/article-view.jpg";
const ArticleView = () => {
	return (
		<div
			className="article-view flex flex-col gap-1 border-2  shadow-lg hover:shadow-2xl duration-300 rounded-2xl px-4 py-5 max-w-sm
        "
		>
			{/* Image */}
			<img
				src={ARTICLE_VIEW}
				alt=""
				className="object-cover rounded-2xl h-48 w-full"
			/>
			{/* Title */}
			<h2 className=" text-2xl">Heroes In Pandemic</h2>
			{/* Author & Date */}
			<div className="auth-n-date flex justify-between text-md">
				<p>22-02-2022</p>
				<p>Admin</p>
			</div>
			{/* Description */}
			<p className="text-justify text-gray-500 text-sm">
				In these unprecedented and changing times, two alumni of Dharmsinh Desai
				university have devoted themselves to assist people in need, in an
				effort to fight
			</p>
			{/* Read-more Button */}
			<button
				className="
                mt-2 duration-200
            bg-teal-600 hover:bg-teal-700
            text-white rounded-2xl w-28
            "
			>
				Read More
			</button>
		</div>
	);
};

export default ArticleView;
