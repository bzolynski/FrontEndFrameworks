import { FC, FunctionComponent, SVGProps } from 'react';
import styled from 'styled-components';
import { mainFontColor } from '../../../styles/colors';

const Wrapper = styled.div`
	height: 100%;
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const Label = styled.h2`
	width: 100%;
	font-size: 25px;
	font-weight: 600;
	color: ${mainFontColor};
	margin-bottom: 10px;
`;
const TextContent = styled.p`
	margin-right: 15px;
	font-size: 13px;
	color: ${mainFontColor};
`;

interface IProps {
	title: string;
	content: string;
	Logo: FunctionComponent<SVGProps<SVGSVGElement>>;
}
const Panel: FC<IProps> = ({ title, content, Logo }) => {
	const logoStyle = {
		height: '50px',
		width: '50px',
		marginBottom: '10px'
	};
	return (
		<Wrapper>
			<Logo style={logoStyle} />
			<Label>{title}</Label>
			<TextContent>{content}</TextContent>
		</Wrapper>
	);
};

export default Panel;
