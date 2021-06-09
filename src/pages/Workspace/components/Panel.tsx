import { FC, FunctionComponent, SVGProps } from 'react';
import styled from 'styled-components';
import { footerFontColor, linkFontColor, mainFontColor } from '../../../styles/colors';

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
	logo: FunctionComponent<SVGProps<SVGSVGElement>>;
}
const Panel: FC<IProps> = ({ title, content, logo }) => {
	const Logo = styled(logo)`
        height: 50px;
        width: 50px;
        margin-bottom: 10px;
    `;
	return (
		<Wrapper>
			<Logo />
			<Label>{title}</Label>
			<TextContent>{content}</TextContent>
		</Wrapper>
	);
};

export default Panel;
