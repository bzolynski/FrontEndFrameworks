import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ICompany from '../../interfaces/ICompany';
import { getEntities } from '../../store/actions/entityActions';
import { IEntityState } from '../../store/reducers/entityReducers';
import { IStore } from '../../store/reducers/reducers';
import Entity from './components/Entity';
import TopBar, { Filter, mosaicView, SortDirection } from './components/TopBar';

type GetEntities = ReturnType<typeof getEntities>;

const maximizedStyles = `
	position: absolute;
	left: 0;
	top: 3.5rem;
	background-color: white;
	overflow-x: hidden;
	padding: 30px;
	width: calc(100% - 60px);
	height: calc(100% - 3.5rem - 60px);
`;

const Wrapper =
	styled.div <
	{ isMaximized: boolean } >
	`
	width: 100%;
	display: flex;
	flex-direction: column;
	${(p) => (p.isMaximized ? maximizedStyles : '')}
	
	
`;

const EntitiesContainer =
	styled.div <
	{ viewStyle: string } >
	`
		width: 100%;
		${(p) => p.viewStyle};

		

	`;

const EntitiesPage: FC = () => {
	const [ viewStyle, setViewStyle ] = useState<string>(mosaicView);
	const [ filterValue, setFilterValue ] = useState<string>('');
	const [ selectedFilter, setSelectedFilter ] = useState<Filter>(Filter.all);
	const [ isMaximized, setIsMaximized ] = useState(false);
	const [ sortDirection, setSortDirection ] = useState(SortDirection.none);
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch<GetEntities>(getEntities());
		},
		[ dispatch ]
	);

	const { entities } = useSelector<IStore, IEntityState>((state) => {
		return { ...state.entityReducer };
	});

	const renderEntities = () => {
		let tempEntities: ICompany[] = [];
		let filteredEntities: ICompany[] = [];

		entities.forEach((entity) => {
			if (entity.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase())) tempEntities.push(entity);
		});

		tempEntities.forEach((entity) => {
			if (selectedFilter == Filter.all) filteredEntities.push(entity);
			else if (entity.id == 1) filteredEntities.push(entity);
		});

		if (sortDirection === SortDirection.asc) filteredEntities.sort((a, b) => (a.name > b.name ? 1 : -1));
		if (sortDirection === SortDirection.desc) filteredEntities.sort((a, b) => (a.name < b.name ? 1 : -1));

		return filteredEntities.map((entity) => <Entity key={entity.id + entity.id} entity={entity} />);
	};

	return (
		<Wrapper isMaximized={isMaximized}>
			<TopBar
				sortDirection={sortDirection}
				setSortDirection={setSortDirection}
				isMaximized={isMaximized}
				setIsMaximized={setIsMaximized}
				setSelectedFilter={setSelectedFilter}
				setFilterValue={setFilterValue}
				setViewStyle={setViewStyle}
			/>
			<EntitiesContainer viewStyle={viewStyle}>{renderEntities()}</EntitiesContainer>
		</Wrapper>
	);
};

export default EntitiesPage;
