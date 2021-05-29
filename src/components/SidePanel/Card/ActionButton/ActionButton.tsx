import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 5px;
	svg {
		height: 1.5rem;
		width: 1.5rem;
	}
`;

const Name = styled.p`
	margin-left: 10px;
	font-size: 14px;
	font-weight: bold;
	width: 70%;
	text-align: left;
	text-justify: center;
	color: #4b5268;
`;

const Button = styled.button`
	border: 0.3px solid lightgray;
	border-radius: 3px;
	background: transparent;
	height: 2rem;
	width: 2rem;
	display: flex;
	padding: 5px;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	:hover {
		background: lightgray;
	}
	svg {
		height: 1rem;
		width: 1rem;
	}
`;

export interface IActionButton {
	name: string;
	icon: ReactElement;
	buttonIcon: ReactElement;
	route: string;
}

const ActionButton: FC<IActionButton> = ({ icon, name, buttonIcon, route }) => {
	return (
		<Wrapper>
			{icon}
			<Name>{name}</Name>
			<Button>{buttonIcon}</Button>
		</Wrapper>
	);
};

export default ActionButton;
