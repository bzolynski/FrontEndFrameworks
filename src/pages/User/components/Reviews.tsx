import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { IReview } from '../../../interfaces/IProfile';
import { mainFontColor, secondaryFontColor } from './../../../styles/colors';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';
import LabelInput from '../../../components/common/LabelInput';
import { updateReviews } from '../../../store/actions/profileActions';
import { useDispatch } from 'react-redux';

type UpdateReviews = ReturnType<typeof updateReviews>;
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

enum ReviewType {
	NAME = 'name',
	ENTITY = 'entity',
	LOCATION = 'location',
	EXPERTISE = 'expertise',
	DATE = 'date'
}

type Props = {
	reviews: IReview[];
};
const Reviews: FC<Props> = ({ reviews }) => {
	const [ isEditing, setIsEditing ] = useState<boolean>(false);
	const dispatch = useDispatch();
	let review: IReview = {
		date: '',
		entity: '',
		expertise: '',
		id: uuidv4(),
		location: '',
		name: ''
	};
	const onLostFocus = (value: string, name: string) => {
		review = { ...review, [name]: value };
	};
	const onFormSubmit = () => {
		dispatch<UpdateReviews>(updateReviews([ ...reviews, review ]));
		setIsEditing(false);
	};
	const renderReviews = () => {
		return reviews.map((x) => (
			<Row key={x.id}>
				<Col>{x.name}</Col>
				<Col>{x.entity}</Col>
				<Col>{x.location}</Col>
				<Col>{x.expertise}</Col>
				<Col>{x.date}</Col>
			</Row>
		));
	};
	return (
		<Wrapper>
			<TopBar>
				<Label>Internal reviews</Label>
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
					</Row>
					{renderReviews()}
				</tbody>
			</Table>
			<EditingWrapper isEditing={isEditing}>
				<LabelInput type="text" name={ReviewType.NAME} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ReviewType.ENTITY} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ReviewType.LOCATION} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ReviewType.EXPERTISE} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={ReviewType.DATE} onLostFocus={onLostFocus} />
				<button onClick={() => onFormSubmit()} type="reset">
					Add
				</button>
			</EditingWrapper>
		</Wrapper>
	);
};

export default Reviews;
