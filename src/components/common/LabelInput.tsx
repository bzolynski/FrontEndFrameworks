import { FC } from 'react';
import styled from 'styled-components';
import { secondaryFontColor } from '../../styles/colors';

type IProps = {
	type: string;
	defaultValue: string;
	name: string;
	placeholder?: string;
	onLostFocus(value: string, name: string): void;
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	p {
		color: ${secondaryFontColor};
		margin-top: 5px;
		margin-bottom: 2px;
		font-size: 12px;
	}
`;

const LabelInput: FC<IProps> = (props: IProps) => {
	const changeValue = (e: HTMLInputElement) => {
		props.onLostFocus(e.value, props.name);
	};
	return (
		<Wrapper>
			<p>{props.name}</p>
			<input
				onBlur={(e) => changeValue(e.target)}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				type={props.type}
			/>
		</Wrapper>
	);
};

export default LabelInput;
