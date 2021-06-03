import { FC } from 'react';
import styled from 'styled-components';
import Author from '../Author/Author';
import { mainFontColor } from '../../../styles/colors';
import IPublication from '../../../interfaces/IPublication';

const Wrapper = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
`;

const Logo = styled.img`
	height: 100%;
	width: 10%;
`;

const Container = styled.div`
	width: auto;
	width: 90%;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const PublicationContent = styled.p`color: ${mainFontColor};`;

const BottomSection = styled.div`
	background: white;
	display: flex;
	justify-content: start;
	align-items: center;
`;

interface IProps {
	publication: IPublication;
}

const Publication: FC<IProps> = ({ publication }) => {
	return (
		<Wrapper>
			<Logo src={publication.photo.thumbnailUrl} />
			<Container>
				<PublicationContent>{publication.body}</PublicationContent>
				<BottomSection>
					<Author user={publication.user} />{' '}
				</BottomSection>
			</Container>
		</Wrapper>
	);
};

export default Publication;
