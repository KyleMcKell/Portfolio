import React, { useState, useEffect } from "react";
import { HomeContent } from "./home/HomeContent";

interface Props {
	page: string;
}

const bodyStyle: React.CSSProperties = {
	backgroundColor: "var(--nord4)",
	marginTop: "6rem",
	height: "100%",
	width: "100%",
	textAlign: "center",
};

export const Body = (props: Props) => {
	const [currentPage, setCurrentPage] = useState(<HomeContent />);

	useEffect(() => {
		switch (props.page) {
			case "home":
				setCurrentPage(<HomeContent />);
				break;
			case "portfolio":
				break;
			case "contact":
				break;
			default:
				throw new Error();
		}
	}, [currentPage, props.page]);

	return <main style={bodyStyle}>{currentPage}</main>;
};
