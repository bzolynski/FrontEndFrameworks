import { FC } from 'react';
import styled from 'styled-components';
import skyscraper from '../../../../../assets/skyscraper.png';
import Author from '../../../../../components/common/Author/Author';
import IPublication from '../../../../../interfaces/IPublication';

const Wrapper = styled.div`
	background-image: linear-gradient(180deg, rgba(255, 0, 0, 0), rgba(49, 58, 83, 0.9));
	border-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	position: absolute;
	width: 350px;
	height: 350px;
	display: flex;
	justify-content: end;
	flex-direction: column;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	justify-content: end;
	flex-direction: column;

	padding: 20px 10px;
`;
const PublicationContent = styled.p`
	margin-bottom: 10px;
	padding-right: 20px;
	color: white;
	font-weight: 400;
`;
interface P {
	publication: IPublication;
}
const DisplayedPublication: FC<P> = ({ publication }) => {
	const Background = styled.div`
		position: absolute;
		height: 350px;
		width: 350px;
		border-radius: 5px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		display: flex;
		justify-content: end;
		flex-direction: column;
		background-image: url(${publication.photo.url});
		background-repeat: no-repeat;
		background-size: cover;
		filter: blur(1px) saturate(120%);
		z-index: 0;
	`;
	return (
		<div>
			<Background />
			<Wrapper>
				<Content>
					<PublicationContent>{publication.body}</PublicationContent>
					<Author user={publication.user} fontColor="white" />
				</Content>
			</Wrapper>
		</div>
	);
};

export default DisplayedPublication;
