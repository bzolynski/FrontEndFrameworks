import { FC, useEffect } from 'react';
import Publications from './components/Publications/Publications';
import styled from 'styled-components';
import Workspaces from './components/Workspaces/Workspaces';
import ResumeWork from './components/ResumeWork/ResumeWork';
import { getPublications } from '../../store/actions/publicationActions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../store/reducers/reducers';
import { IWorkState } from '../../store/reducers/worksReducer';

type GetPublications = ReturnType<typeof getPublications>;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

const HomePage: FC = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch<GetPublications>(getPublications(4));
	}, [dispatch]);

	return (
		<Wrapper>
			<Publications />
			<Workspaces />
			<ResumeWork label={'Resume work'} />
		</Wrapper>
	);
};
export default HomePage;
