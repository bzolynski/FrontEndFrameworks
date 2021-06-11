import { FC } from 'react';
import styled from 'styled-components';
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
	margin-top: auto;

	padding: 20px 10px;
`;
const PublicationContent = styled.p`
	margin-bottom: 10px;
	padding-right: 20px;
	color: white;
	font-weight: 400;
`;

const Background =
	styled.div <{url: string}>`
		position: absolute;
		height: 350px;
		width: 350px;
		border-radius: 5px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		display: flex;
		justify-content: end;
		flex-direction: column;
		background-image: url(${(p) => p.url});
		background-repeat: no-repeat;
		background-size: cover;
		filter: blur(1px) saturate(120%);
		z-index: 0;
	`;

interface P {
	publication: IPublication;
}
const DisplayedPublication: FC<P> = ({ publication }) => {
	return (
		<div>
			<Background url={publication.photo.url} />
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
