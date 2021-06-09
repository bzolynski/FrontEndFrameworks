import { FC } from 'react';
import styled from 'styled-components';
import { mainFontColor } from '../../../../styles/colors';
import Workspace from './Workspace/Workspace';

const Wrapper = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
`;

const Label = styled.h1`
	margin: 20px;
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow-x: auto;
	max-height: 250px;
	display: grid;
	gap: 5px;
	grid-auto-flow: column;
`;

const Workspaces: FC = () => {
	

	return (
		<Wrapper>
			<Label>Workspaces</Label>
			<Container>
				<Workspace />
				<Workspace />
				<Workspace />
				<Workspace />
				<Workspace />
			</Container>
		</Wrapper>
	);
};

export default Workspaces;
