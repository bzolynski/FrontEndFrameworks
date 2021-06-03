import { FC } from 'react';
import styled from 'styled-components';
import AuthorDetails from './AuthorDetails/AuthorDetails';
import { secondaryFontColor } from '../../../styles/colors';
import IUser from '../../../interfaces/IUser';

const Date = styled.p`
	margin-right: 5px;
	font-size: 12px;
	color: ${secondaryFontColor};
`;

interface IProps {
	fontColor?: string;
	user: IUser;
}

const Author: FC<IProps> = ({ fontColor, user }) => {
	const Wrapper = styled.div`
		width: 100%;
		display: flex;
		align-items: center;
		color: ${fontColor ? fontColor : 'black'};
	`;
	return (
		<Wrapper>
			<Date>12.02.2020</Date>
			<AuthorDetails user={user} />
		</Wrapper>
	);
};

export default Author;
