import { FC } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import StyledLink from '../../../../components/common/StyledLink';
import { setSelectedWorkspace } from '../../../../store/actions/dropdownActions';
import { mainFontColor } from '../../../../styles/colors';
import Workspace from './Workspace/Workspace';

type SetSelectedWorkspace = ReturnType<typeof setSelectedWorkspace>;
const Wrapper = styled.div`
	width: 100%;
	height: 250px;
	display: flex;
	flex-direction: column;
`;

const Label = styled.h1`
	margin: 20px;
	width: 100%;
	font-size: 23px;
	color: ${mainFontColor};
`;

const Container = styled.div`
	height: 100%;
	width: 100%;
	overflow-x: auto;
	max-height: 250px;
	display: grid;
	gap: 5px;
	grid-auto-flow: column;
`;

interface IWorkspace {
	id: number;
	label: string;
	svg: string;
	type: string;
	numOfUsers: number;
}

const workspaces: IWorkspace[] = [
	{
		id: 1,
		label: 'Client contract',
		numOfUsers: 25,
		type: 'Contract',
		svg: ''
	},
	{
		id: 2,
		label: 'Supplier contract',
		numOfUsers: 250,
		type: 'Contract',
		svg: ''
	},
	{
		id: 3,
		label: 'Coprporate',
		numOfUsers: 100,
		type: 'Corporate',
		svg: ''
	},
	{
		id: 4,
		label: 'Group norms',
		numOfUsers: 5,
		type: 'Norms',
		svg: ''
	},
	{
		id: 5,
		label: 'Real estate',
		numOfUsers: 10,
		type: 'Estate',
		svg: ''
	}
];

const Workspaces: FC = () => {
	const dispatch = useDispatch();
	const changeWorkspace = (id: number) => {
		const workspace = workspaces.find((x) => x.id === id);
		dispatch<SetSelectedWorkspace>(setSelectedWorkspace(workspace!.label));
	};
	return (
		<Wrapper>
			<Label>Workspaces</Label>
			<Container>
				{workspaces.map((x) => (
					<StyledLink onClick={() => changeWorkspace(x.id)} key={x.id} to="workspaces">
						<Workspace label={x.label} numOfUsers={x.numOfUsers} type={x.type} svg={x.svg} />
					</StyledLink>
				))}
			</Container>
		</Wrapper>
	);
};

export default Workspaces;
