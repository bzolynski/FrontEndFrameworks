import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	border: 0.3px lightgray solid;
	border-radius: 2px;
	display: flex;
	align-items: center;
	margin: 5px 10px;
	width: 90%;
	padding: 2px 5px;
`;

const Input = styled.input`
	border: none;
	height: 20px;
	width: 100%;

	:focus {
		outline: none;
	}
`;

export interface IInputFilter {
	setValue: Function;
}

const InputFilter: FC<IInputFilter> = ({ setValue }) => {
	const setInput = (target: HTMLInputElement) => {
		setValue(target.value);
	};
	return (
		<Wrapper>
			<Input onChange={(x: ChangeEvent) => setInput(x.target as HTMLInputElement)} placeholder="Filter..." />
		</Wrapper>
	);
};

export default InputFilter;
