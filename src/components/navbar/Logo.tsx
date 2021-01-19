import React from "react";

interface Props {}

const logoStyle: React.CSSProperties = {
	fontSize: "1.7rem",
	fontWeight: "bold",
};

export const Logo = (props: Props) => {
	return <div style={logoStyle}>Kyle McKell</div>;
};
