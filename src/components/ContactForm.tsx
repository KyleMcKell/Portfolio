import React from "react";
import styled from "styled-components";

interface Props {}

const StyledField = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ContactInfoDiv = styled.div`
	display: flex;
`;

const LabelInputDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 2rem;
`;

const OneLineInput = styled.input`
	height: 2rem;
	padding: 0.2em 1em;
	width: 12em;
	border: none;
	border-radius: 5px;
	background-color: var(--nord3);
	color: var(--nord6);
	margin-top: 0.3rem;
	font-size: 0.8rem;
	font-family: inherit;

	:focus {
		background-color: var(--nord4);
		color: var(--nord0);
	}
`;

const MessageArea = styled.textarea`
	width: 36em;
	height: 60px;
	padding: 1em;
	display: flex;
	align-items: start;
	justify-content: start;
	white-space: normal;
	border: none;
	font-family: inherit;
	border-radius: 5px;
	background-color: var(--nord3);
	color: var(--nord6);
	margin-top: 0.3rem;
	font-size: 0.8rem;

	:focus {
		background-color: var(--nord4);
		color: var(--nord0);
	}
`;

const SubmitButton = styled.button`
	border: none;
	background: none;
	width: 11rem;
	height: 3rem;
	background-color: var(--nord3);
	border-radius: 4px;
	font-family: inherit;
	font-size: 1.1rem;
	font-weight: bold;
	box-shadow: 2px 2px 1px var(--nord0);
	margin-top: 0.8rem;
	margin-bottom: 0.2rem;
	color: var(--nord6);

	:hover {
		cursor: pointer;
	}

	:active {
		margin-top: 0.9rem;
		margin-bottom: 0.1rem;
	}
`;

export const ContactForm = (props: Props) => {
	return (
		<StyledField action="submit">
			<ContactInfoDiv>
				<LabelInputDiv>
					<label htmlFor="name">Name</label>
					<OneLineInput type="text" name="name" />
				</LabelInputDiv>
				<LabelInputDiv>
					<label htmlFor="email">Email</label>
					<OneLineInput type="email" name="email" />
				</LabelInputDiv>
			</ContactInfoDiv>
			<LabelInputDiv>
				<label htmlFor="message">Message</label>
				<MessageArea name="message" />
			</LabelInputDiv>
			<div className="ButtonDiv">
				<SubmitButton type="button">Send</SubmitButton>
			</div>
		</StyledField>
	);
};
