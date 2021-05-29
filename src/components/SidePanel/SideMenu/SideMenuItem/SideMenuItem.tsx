import { logDOM } from '@testing-library/dom';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	width: 100%;
	svg {
		height: 2rem;
		width: 2rem;
		margin-right: 20px;
	}
	font-weight: bold;
	font-size: 14px;
	color: #4d5469;
	margin-top: 10px;
	margin-left: 35px;
`;

export interface ISideMenuItem {
	icon: ReactElement;
	name: string;
	route: string;
}

const SideMenuItem: FC<ISideMenuItem> = ({ icon, name, route }) => {
	return (
		<Wrapper>
			{icon} {name}
		</Wrapper>
	);
};

export default SideMenuItem;
