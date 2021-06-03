import { FC } from 'react';
import styled from 'styled-components';
import {
	linkFontColor,
	panelsBackgroundColor,
	footerFontColor,
	secondaryFontColor
} from '../../../../../styles/colors';
import { mainBoxShadowStyle } from '../../../../../styles/styles';
import ImgAndLabel from '../../../../../components/common/ImgAndLabel';
import DotSeparator from '../../../../../components/common/DotSeparator';

const Wrapper = styled.div`
	width: 100%;
	height: 100px;
	margin-bottom: 10px;
	border-radius: 5px;
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: ${panelsBackgroundColor};
	box-shadow: ${mainBoxShadowStyle};
`;

const Label = styled.h2`
	width: 100%;
	font-size: 20px;
	font-weight: 600;
	color: ${linkFontColor};
	margin: 0px 15px;
`;

const TextContent = styled.p`
	margin-left: 15px;
	color: ${secondaryFontColor};
`;

const BottomBand = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	width: 100%;
	margin: 0 15px;
`;

const Footer = styled.p`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	color: ${footerFontColor};
	font-size: 12px;
`;

const Work: FC = () => {
	return (
		<Wrapper>
			<Label>World company SAS</Label>
			<TextContent>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur accusamus reprehenderit sequi
				minus doloremque dicta inventore, dignissimos praesentium quo eum laboriosam sed saepe, rem mollitia!
				Perspiciatis ut dolores minus?
			</TextContent>
			<BottomBand>
				<ImgAndLabel />
				<DotSeparator />
				<ImgAndLabel />
				<DotSeparator />
				<Footer>Updated 3 days ago by XXX</Footer>
			</BottomBand>
		</Wrapper>
	);
};

export default Work;
