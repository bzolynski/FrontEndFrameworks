import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Entity from './components/Entity/Entity';
import { getEntities } from '../../store/actions/entityActions';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../store/reducers/reducers';
import { IEntityState } from '../../store/reducers/entityReducers';
import TopBar from './components/TopBar/TopBar';
import { mosaicView, listView } from './components/TopBar/TopBar';
import ICompany from '../../interfaces/ICompany';

type GetEntities = ReturnType<typeof getEntities>;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const EntitiesPage: FC = () => {
	const [ viewStyle, setViewStyle ] = useState<string>(mosaicView);
	const [ filterValue, setFilterValue ] = useState<string>('');

	const dispatch = useDispatch();

	const EntitiesContainer = styled.div`
		width: 100%;
		${viewStyle};
	`;
	useEffect(() => {
		dispatch<GetEntities>(getEntities());
	}, []);

	const { entities } = useSelector<IStore, IEntityState>((state) => {
		return { ...state.entityReducer };
	});

	const renderEntities = () => {
		const filteredEntities: ICompany[] = [];
		entities.forEach((entity) => {
			if (entity.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase())) filteredEntities.push(entity);
		});
		return filteredEntities.map((entity) => <Entity key={entity.id} entity={entity} />);
	};

	return (
		<Wrapper>
			{console.log('render')}
			<TopBar setFilterValue={setFilterValue} setViewStyle={setViewStyle} />
			<EntitiesContainer>{renderEntities()}</EntitiesContainer>
		</Wrapper>
	);
};

export default EntitiesPage;
