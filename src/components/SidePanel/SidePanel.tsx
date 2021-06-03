import { FC } from 'react';
import styled from 'styled-components';
import Card from './Card/Card';
import SideMenu from './SideMenu/SideMenu';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 25%;
`;

const SidePanel: FC = () => {
	return (
		<Wrapper>
			<Card />
			<SideMenu />
		</Wrapper>
	);
};

export default SidePanel;
