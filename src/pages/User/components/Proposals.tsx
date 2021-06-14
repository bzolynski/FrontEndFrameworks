import { FC, useState } from 'react';
import styled from 'styled-components';
import { IProposal } from '../../../interfaces/IProfile';
import { mainFontColor, secondaryFontColor } from './../../../styles/colors';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';
import LabelInput from '../../../components/common/LabelInput';
import { updateProposals } from '../../../store/actions/profileActions';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

type UpdateProposals = ReturnType<typeof updateProposals>;
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const Label = styled.h2`
	color: ${mainFontColor};
	font-size: 16px;
	margin-bottom: 15px;
`;

const Header = styled.th`
	font-size: 15px;
	color: ${mainFontColor};
`;

const Row = styled.tr``;

const Col = styled.td`
	font-size: 12px;
	color: ${secondaryFontColor};
	padding-top: 5px;
`;

const Table = styled.table``;

const EditingWrapper =
	styled.form <
	{ isEditing: boolean } >
	`
	display: ${(p) => (p.isEditing ? 'flex' : 'none')};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 5px;
	div{
		width: 90px;
	}

	button{
		margin-top: auto;
		height: 25px;
	}
`;
const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	svg {
		margin-left: auto;
		height: 10px;
		width: 10px;
		cursor: pointer;
		&:hover {
			scale: 1.1;
		}
	}
`;

enum ProposalType {
	NAME = 'name',
	ENTITY = 'entity',
	LOCATION = 'location',
	EXPERTISE = 'expertise',
	DATE = 'date',
	FIRM = 'firm'
}

type Props = {
	proposals: IProposal[];
};
const Proposals: FC<Props> = ({ proposals }) => {
	const dispatch = useDispatch();
	const [ isEditing, setIsEditing ] = useState<boolean>(false);
	let proposal: IProposal = {
		date: '',
		entity: '',
		expertise: '',
		firm: '',
		id: uuidv4(),
		location: '',
		name: ''
	};
	const onLostFocus = (value: string, name: string) => {
		proposal = { ...proposal, [name]: value };
	};
	const onFormSubmit = () => {
		dispatch<UpdateProposals>(updateProposals([ ...proposals, proposal ]));
		setIsEditing(false);
	};
	const renderProposals = () => {
		return proposals.map((x) => (
			<Row key={x.id}>
				<Col>{x.name}</Col>
				<Col>{x.entity}</Col>
				<Col>{x.location}</Col>
				<Col>{x.expertise}</Col>
				<Col>{x.date}</Col>
				<Col>{x.firm}</Col>
			</Row>
		));
	};
	return (
		<Wrapper>
			<TopBar>
				<Label>Proposals</Label>
				<PenLogo onClick={() => setIsEditing(!isEditing)} />
			</TopBar>
			<Table>
				<tbody>
					<Row>
						<Header>Name</Header>
						<Header>Entity</Header>
						<Header>Location</Header>
						<Header>Expertise</Header>
						<Header>Date</Header>
						<Header>Firm</Header>
					</Row>
					{renderProposals()}
				</tbody>
			</Table>
			<EditingWrapper isEditing={isEditing}>
				<LabelInput type="text" name={ProposalType.NAME} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ProposalType.ENTITY} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ProposalType.LOCATION} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ProposalType.EXPERTISE} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ProposalType.DATE} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ProposalType.FIRM} onLostFocus={onLostFocus} />
				<button onClick={() => onFormSubmit()} type="reset">
					Add
				</button>
			</EditingWrapper>
		</Wrapper>
	);
};
export default Proposals;
