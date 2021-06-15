import { FC } from 'react';
import styled from 'styled-components';
import { footerFontColor, mainFontColor, secondaryFontColor } from '../../../styles/colors';
import { ReactComponent as CloseLogo } from '../../../assets/close.svg';
import { ReactComponent as PlusLogo } from '../../../assets/plus.svg';
import Select from 'react-select';
import { EnumType } from 'typescript';

const Wrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	background: white;
	padding: 10px;
	width: 1000px;
	top: 20px;
	border: 1px solid ${footerFontColor};
	border-radius: 5px;
	z-index: 20;
`;

const Description = styled.p`
	color: ${footerFontColor};
	margin-bottom: 10px;
`;

const OptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 15px;
	align-items: center;
	margin: 10px 20px;

	svg {
		height: 15px;
		width: 15px;
	}
	input {
		height: 22px;
	}
`;

const StyledSelect = styled(Select)`
    width: 150px;
`;

const NiceFont = styled.h2`
	font-size: 15px;
	color: ${secondaryFontColor};
`;

enum Options {
	Company,
	Status
}

interface IOption {
	value: any;
	label: string;
}

const optionList: IOption[] = [
	{
		label: 'Company',
		value: Options.Company
	},
	{
		label: 'Status',
		value: Options.Status
	}
];

enum ConditionOption {
	Contains,
	Is,
	In,
	EndsBefore
}

const conditionList: IOption[] = [
	{
		label: 'Contains',
		value: ConditionOption.Contains
	},
	{
		label: 'Is',
		value: ConditionOption.Is
	},
	{
		label: 'In',
		value: ConditionOption.In
	},
	{
		label: 'Ends before',
		value: ConditionOption.EndsBefore
	}
];

type Props = {};
const Filters: FC<Props> = (props: Props) => {
	return (
		<Wrapper>
			<Description>Rows are filtered by the following conditions starting from the top</Description>
			<OptionWrapper>
				<CloseLogo />
				<NiceFont>Where</NiceFont>
				<StyledSelect options={optionList} defaultValue={optionList[0]} />
				<StyledSelect options={conditionList} defaultValue={conditionList[0]} />
				<input />
			</OptionWrapper>
			<OptionWrapper>
				<CloseLogo />
				<NiceFont>Where</NiceFont>
				<StyledSelect options={optionList} defaultValue={optionList[1]} />
				<StyledSelect options={conditionList} defaultValue={conditionList[1]} />
				<input />
				<StyledSelect options={conditionList} defaultValue={conditionList[2]} />
				<input />
			</OptionWrapper>
			<OptionWrapper>
				<CloseLogo />
				<NiceFont>And</NiceFont>
				<StyledSelect options={optionList} defaultValue={optionList[1]} />
				<StyledSelect options={conditionList} defaultValue={conditionList[3]} />
				<input />
				<StyledSelect options={conditionList} defaultValue={conditionList[2]} />
				<input />
			</OptionWrapper>
			<OptionWrapper>
				<PlusLogo />
				<NiceFont style={{ color: '#4e5fad' }}>Add filter</NiceFont>
				<NiceFont style={{ color: '#4e5fad' }}>choose property V</NiceFont>
			</OptionWrapper>
		</Wrapper>
	);
};

export default Filters;
