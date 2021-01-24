import React from "react";
import { ContactForm } from "components/ContactForm";
import H2Text from "components/H2Text";
import Separator from "components/Separator";

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
