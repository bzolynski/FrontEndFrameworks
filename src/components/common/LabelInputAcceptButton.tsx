import { FC, useState } from 'react';
import styled from 'styled-components';
import { secondaryFontColor } from '../../styles/colors';

type IProps = {
	type: string;
	defaultValue?: string;
	label: string;
    name: string;
	placeholder?: string;
	onAccept(value: string, name: string): void;
	buttonText: string;
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

const InputButtonSection = styled.div`
	flex-direction: row;
	button {
		margin-left: 10px;
	}
`;

const LabelInputAcceptButton: FC<IProps> = (props: IProps) => {
	let value = '';
	const changeValueHandler = (e: HTMLInputElement) => {
		value = e.value;
	};
	return (
		<Wrapper>
			<p>{props.label}</p>
			<InputButtonSection>
				<input
					onBlur={(e) => changeValueHandler(e.target)}
					placeholder={props.placeholder}
					defaultValue={props.defaultValue}
					type={props.type}
				/>
				<button type="reset" onClick={() => props.onAccept(value, props.name)}>
					{props.buttonText}
				</button>
			</InputButtonSection>
		</Wrapper>
	);
};

export default LabelInputAcceptButton;
