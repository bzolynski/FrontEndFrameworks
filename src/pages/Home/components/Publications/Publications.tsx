import { FC } from 'react';
import styled from 'styled-components';
import DisplayedPublication from './DisplayedPublication/DisplayedPublication';
import LatestPublications from './LatestPublications/LatestPublications';
import { mainBoxShadowStyle } from '../../../../styles/styles';
import { useSelector } from 'react-redux';
import { IStore } from '../../../../reducers/reducers';
import { IPublicationState } from '../../../../reducers/publicationReducers';

const Wrapper = styled.div`
	width: 100%;
	height: 350px;
	border-radius: 5px;
	display: flex;
	justify-content: space-between;
	box-shadow: ${mainBoxShadowStyle};
`;

const Publications: FC = () => {
	const { publications } = useSelector<IStore, IPublicationState>((state) => {
		return { ...state.publicationReducer };
	});

	const getDisplayedPublication = () => {
		var publication = publications[0];
		return publication ? <DisplayedPublication publication={publication} /> : <div />;
	};

	const getLatestPublications = () => {
		const latestPublications = [ ...publications ].slice(1);
		return latestPublications.length > 0 ? <LatestPublications publications={latestPublications} /> : <div />;
	};

	return (
		<Wrapper>
			{getDisplayedPublication()}
			{getLatestPublications()}
		</Wrapper>
	);
};

export default Publications;
