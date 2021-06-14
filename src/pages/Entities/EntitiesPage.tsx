import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ICompany from '../../interfaces/ICompany';
import { getEntities } from '../../store/actions/entityActions';
import { IEntityState } from '../../store/reducers/entityReducers';
import { IStore } from '../../store/reducers/reducers';
import Entity from './components/Entity/Entity';
import TopBar, { mosaicView } from './components/TopBar/TopBar';

type GetEntities = ReturnType<typeof getEntities>;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
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
		const filteredEntities: ICompany[] = [];
		const moreEntities = [ ...entities, ...entities ];
		moreEntities.forEach((entity) => {
			if (entity.name.toLocaleLowerCase().match(filterValue.toLocaleLowerCase())) filteredEntities.push(entity);
		});
		return filteredEntities.map((entity) => <Entity key={entity.id} entity={entity} />);
	};

	return (
		<Wrapper>
			<TopBar setFilterValue={setFilterValue} setViewStyle={setViewStyle} />
			<EntitiesContainer viewStyle={viewStyle}>{renderEntities()}</EntitiesContainer>
		</Wrapper>
	);
};

export default EntitiesPage;
