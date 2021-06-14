import { FC } from 'react';
import styled from 'styled-components';
import { ReactComponent as BubbleLogo } from '../../../assets/bubble.svg';
import { ReactComponent as FileLogo } from '../../../assets/file.svg';
import { ReactComponent as ProfileLogo } from '../../../assets/profile.svg';
import { IPanelInfo } from '../../../interfaces/IProfile';
import { footerFontColor, mainFontColor, secondaryFontColor } from './../../../styles/colors';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const Label = styled.h2`
	color: ${mainFontColor};
	font-size: 12px;
`;

const MainLabel = styled(Label)`
	font-size: 16px;
	margin-bottom: 10px;
`;

const Container = styled.div`
	padding: 5px;
	flex-direction: column;
	display: flex;
	margin-bottom: 10px;
`;

const SmallLabel = styled.h4`
	font-size: 12px;
	color: ${footerFontColor};
`;

const Content = styled.p`
	font-size: 15px;
	color: ${secondaryFontColor};
	margin: 5px 0;
`;

const Attachment = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: row;
	padding: 5px;
	background-color: #f4f5fa;
	border-radius: 2px;
	align-items: center;
`;

const StyledFileLogo = styled(FileLogo)`
    margin-right: 10px;
    height: 12px;
    width: 12px;
`;

const Correspondent = styled.div`
	background-color: #f4f5fa;
	margin-top: 10px;
	padding: 5px;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const PseudoButton = styled.div`
	color: ${secondaryFontColor};
	display: flex;
	flex-direction: row;
	svg {
		height: 15px;
		width: 15px;
	}
`;

type Props = {
	panelInfo: IPanelInfo;
};
const PanelInformations: FC<Props> = ({ panelInfo }) => {
	return (
		<Wrapper>
			<MainLabel>Panel informations</MainLabel>
			<Container>
				<SmallLabel>Hourly fee</SmallLabel>
				<Content>{panelInfo.hourlyFee}</Content>
			</Container>
			<Container>
				<SmallLabel>Terms and conditions</SmallLabel>
				<Content>{panelInfo.terms.label}</Content>
				<Attachment>
					<StyledFileLogo />
					<p>{panelInfo.terms.attachement}</p>
				</Attachment>
			</Container>
			<Container>
				<Label>Services and projects</Label>
				<Content>{panelInfo.projects}</Content>
			</Container>
			<Container>
				<Label>Internal correspondants</Label>
				{panelInfo.correspondants.map((x) => (
					<Correspondent key={x.id}>
						<Label>{x.value}</Label>
						<PseudoButton>
							<BubbleLogo />Message
						</PseudoButton>
						<PseudoButton>
							<ProfileLogo />Profile
						</PseudoButton>
					</Correspondent>
				))}
			</Container>
		</Wrapper>
	);
};

export default PanelInformations;
