import { FC } from 'react';
import styled from 'styled-components';
import { mainFontColor, linkFontColor, panelsBackgroundColor } from '../../../../../styles/colors';
import StyledLink from '../../../../../components/common/StyledLink';
import Publication from '../../../../../components/common/Publication/Publication';
import IPublication from '../../../../../interfaces/IPublication';

const Wrapper = styled.div`
	width: 100%;
	margin-left: 350px;
	background: ${panelsBackgroundColor};
	border-radius: inherit;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	padding: 10px 20px;
	display: flex;
	flex-direction: column;
`;

const Label = styled.h1`
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const PublicationsContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const Footer = styled.h3`
	width: 100%;
	font-size: 18px;
	color: ${linkFontColor};
	font-weight: 600;
`;

interface IProps {
	publications: IPublication[];
}

const LatestPublications: FC<IProps> = ({ publications }) => {
	return (
		<Wrapper>
			<Label>Latest publications</Label>
			<PublicationsContainer>
				{publications.map((publication) => <Publication key={publication.id} publication={publication} />)}
			</PublicationsContainer>
			<StyledLink to="/publications">
				<Footer>See more publications</Footer>
			</StyledLink>
		</Wrapper>
	);
};

export default LatestPublications;
