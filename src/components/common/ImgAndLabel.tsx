import { FC } from 'react';
import styled from 'styled-components';
import { secondaryFontColor } from '../../styles/colors';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	color: ${secondaryFontColor};

	p {
		margin-left: 5px;
		font-size: 12px;
	}
`;

const Img = styled.img`
	height: 20px;
	width: 20px;
	border-radius: 50%;
`;

interface IProps {
	text: string;
	src: string;
}
const ImgAndLabel: FC<IProps> = ({ text, src }) => {
	return (
		<Wrapper>
			<Img src={src} />
			<p>{text}</p>
		</Wrapper>
	);
};

export default ImgAndLabel;
