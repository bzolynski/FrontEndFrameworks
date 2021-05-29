import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border: 0.3px lightgray solid;
	border-radius: 2px;
	display: flex;
	align-items: center;
	width: 90%;
	margin: 5px 10px;
	padding: 2px 5px;
`;

const Input = styled.input`
	border: none;
	width: 100%;
	height: 20px;

	:focus {
		outline: none;
	}
`;

export interface IDropdownFilter {
	changeFilterInput: Function;
	filterValue: string;
}

const DropdownFilter: FC<IDropdownFilter> = ({ changeFilterInput: changeSearchBarInput, filterValue }) => {
	return (
		<Wrapper>
			<Input
				value={filterValue}
				onChange={(x: ChangeEvent) => changeSearchBarInput(x.target)}
				placeholder="Filter..."
			/>
		</Wrapper>
	);
};

export default DropdownFilter;
