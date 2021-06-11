import { FC } from 'react';
import styled from 'styled-components';
import IUser from '../../../../interfaces/IUser';
import { secondaryFontColor } from '../../../../styles/colors';
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;

	p {
		margin-left: 5px;
		font-size: 12px;
		color: ${secondaryFontColor};
	}
`;

const Photo = styled.img`
	height: 20px;
	width: 20px;
	border-radius: 50%;
`;
interface IProps {
	user: IUser;
}
const AuthorDetails: FC<IProps> = ({ user }) => {
	return (
		<Wrapper>
			<Photo src={user.photo?.thumbnailUrl} />
			<p >{user.name}</p>
		</Wrapper>
	);
};

export default AuthorDetails;
