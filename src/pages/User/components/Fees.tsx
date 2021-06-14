import { FC, useState } from 'react';
import styled from 'styled-components';
import { IFee } from '../../../interfaces/IProfile';
import { mainFontColor, secondaryFontColor } from './../../../styles/colors';
import { ReactComponent as PenLogo } from '../../../assets/pen.svg';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import LabelInput from '../../../components/common/LabelInput';
import { updateFees } from '../../../store/actions/profileActions';
type UpdateFees = ReturnType<typeof updateFees>;
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

enum FeeTypes {
	YEAR = 'year',
	COSTCENTER = 'costCenter',
	TOTALAMOUNT = 'totalAmount',
	FIRM = 'firm'
}

type Props = {
	fees: IFee[];
};
const Fees: FC<Props> = ({ fees }) => {
	const [ isEditing, setIsEditing ] = useState<boolean>(false);
	const dispatch = useDispatch();
	let fee: IFee = {
		id: uuidv4(),
		year: 2021,
		costCenter: '',
		totalAmount: '',
		firm: ''
	};
	const onLostFocus = (value: string, name: string) => {
		fee = { ...fee, [name]: value };
	};
	const onFormSubmit = () => {
		dispatch<UpdateFees>(updateFees([ ...fees, fee ]));
		setIsEditing(false);
	};
	const renderFees = () => {
		return fees.map((x) => (
			<Row key={x.id}>
				<Col>{x.year}</Col>
				<Col>{x.costCenter}</Col>
				<Col>{x.totalAmount}</Col>
				<Col>{x.firm}</Col>
			</Row>
		));
	};
	return (
		<Wrapper>
			<TopBar>
				<Label>Fees</Label>
				<PenLogo onClick={() => setIsEditing(!isEditing)} />
			</TopBar>
			<Table>
				<tbody>
					<Row>
						<Header>Year</Header>
						<Header>Cost center</Header>
						<Header>Total ammount</Header>
						<Header>Law firm</Header>
					</Row>

					{renderFees()}
				</tbody>
			</Table>
			<EditingWrapper isEditing={isEditing}>
				<LabelInput type="text" name={FeeTypes.YEAR} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={FeeTypes.COSTCENTER} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={FeeTypes.TOTALAMOUNT} onLostFocus={onLostFocus} />
				<LabelInput type="text" name={FeeTypes.FIRM} onLostFocus={onLostFocus} />
				<button onClick={() => onFormSubmit()} type="reset">
					Add
				</button>
			</EditingWrapper>
		</Wrapper>
	);
};

export default Fees;
