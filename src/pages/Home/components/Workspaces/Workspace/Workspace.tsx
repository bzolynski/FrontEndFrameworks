import { FC } from 'react';
import styled from 'styled-components';
import { mainFontColor, panelsBackgroundColor, footerFontColor } from '../../../../../styles/colors';
import { mainBoxShadowStyle } from '../../../../../styles/styles';
import image from '../../../../../assets/bell.png';
import DotSeparator from '../../../../../components/common/DotSeparator';
import ImgAndLabel from '../../../../../components/common/ImgAndLabel';

const Wrapper = styled.div`
	width: 280px;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin-right: 2px;
	border-radius: 5px;
	position: relative;
	box-shadow: ${mainBoxShadowStyle};
`;

const TopImage = styled.img`
	height: 40%;
	width: 100%;
	background: yellow;
	border-radius: inherit;
	border-bottom-right-radius: 0;
	border-bottom-left-radius: 0;
`;

const Icon = styled.img`
	width: 50px;
	padding: 15px;
	position: absolute;
	border-radius: 3px;
	border: 1px solid #d6d6d6;
	box-shadow: ${mainBoxShadowStyle};
	top: 25%;
	left: 10px;
	height: 50px;
	background: white;
`;

const Container = styled.div`
	background: ${panelsBackgroundColor};
	width: 100%;
	height: 60%;
	border-radius: inherit;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Label = styled.h2`
	width: 100%;
	font-size: 20px;
	font-weight: 600;
	color: ${mainFontColor};
	margin: 10px 100px;
`;

const BottomSection = styled.div`
	width: 100%;
	margin: 5px 10px;
	display: flex;
	flex-direction: column;

	div {
		display: flex;
	}
`;

const Footer = styled.p`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	color: ${footerFontColor};
	font-size: 12px;
`;

const Workspace: FC = () => {
	return (
		<Wrapper>
			<TopImage />
			<Icon src={image} />
			<Container>
				<Label>Client contract</Label>
				<BottomSection>
					<div>
						<ImgAndLabel text={'TOCHANGE LOL'} />
						<DotSeparator />
						<ImgAndLabel text={'TOCHANGE LOL'} />
					</div>
					<div>
						<Footer>Last update XXXX days ago</Footer>
					</div>
				</BottomSection>
			</Container>
		</Wrapper>
	);
};

export default Workspace;
