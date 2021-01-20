import React, { useState, useEffect } from "react";
import { ContactContent } from "./contact/ContactContent";
import { HomeContent } from "./home/HomeContent";
import { PortfolioContent } from "./portfolio/PortfolioContent";

interface Props {
	page: string;
}

const bodyStyle: React.CSSProperties = {
	backgroundColor: "var(--nord4)",
	height: "100vh",
	width: "100%",
	textAlign: "center",
	display: "flex",
	flexDirection: "column",
};

export const Body = (props: Props) => {
	const [currentPage, setCurrentPage] = useState<JSX.Element>();

	useEffect(() => {
		switch (props.page) {
			case "home":
				setCurrentPage(<HomeContent />);
				break;
			case "portfolio":
				setCurrentPage(<PortfolioContent />);
				break;
			case "contact":
				setCurrentPage(<ContactContent />);
				break;
			default:
				throw new Error();
		}
	}, [currentPage, props.page]);

	return <main style={bodyStyle}>{currentPage}</main>;
};
