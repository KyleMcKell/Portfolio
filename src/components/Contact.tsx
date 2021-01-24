import React from "react";
import { ContactForm } from "./ContactForm";
import H2Text from "./H2Text";
import Separator from "./Separator";

interface Props {}

export const Contact = (props: Props) => {
	return (
		<>
			<H2Text>Contact Me!</H2Text>
			<Separator />
			<ContactForm />
		</>
	);
};
