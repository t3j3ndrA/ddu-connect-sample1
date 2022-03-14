import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Announcement = () => {
	return (
		<Container>
			We are hiring new Memebers!{" "}
			<Link to={"/"}>
				<span className="underline">Fill out this FORM!</span>
			</Link>
		</Container>
	);
};

const Container = styled.div`
	background-color: teal;
	color: white;
	text-align: center;
	font-weight: bold;
	font-size: 14;
	padding-top: 4px;
	padding-bottom: 4px;
`;

export default Announcement;
