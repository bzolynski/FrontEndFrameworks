import { FC } from 'react';
import styled from 'styled-components';
import { mainFontColor } from '../../../../styles/colors';
import Work from './Resume/Work';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 2px;
	border-radius: 5px;
	position: relative;
`;

const Label = styled.h1`
	margin: 20px;
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ResumeWork: FC = () => {
	return (
		<Wrapper>
			<Label>Resume your work</Label>
			<Container>
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
				<Work />
			</Container>
		</Wrapper>
	);
};

export default ResumeWork;
