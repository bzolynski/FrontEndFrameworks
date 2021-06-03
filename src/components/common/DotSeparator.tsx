import { FC } from 'react';
import styled from 'styled-components';
import { secondaryFontColor } from '../../styles/colors';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 10px;
	text-align: center;
	width: 20px;
	font-weight: bold;
	margin: 0 6px;
	font-size: 20px;
	color: ${secondaryFontColor};
`;
const DotSeparator: FC = () => {
	return <Wrapper>.</Wrapper>;
};

export default DotSeparator;
