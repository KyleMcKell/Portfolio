import React from "react";

interface Props {}

const mainStyle: React.CSSProperties = {
	marginLeft: "5rem",
	background: "var(--nord6)",
	padding: "1rem",
	height: "100%",
};

export const Body = (props: Props) => {
	return (
		<main style={mainStyle}>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel expedita
			minus enim omnis iste fugiat similique aspernatur necessitatibus facere
			harum nesciunt quibusdam, sed deleniti quasi voluptas et hic inventore
			perspiciatis?
		</main>
	);
};
